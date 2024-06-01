import React, { useEffect, useState, useCallback, useRef } from "react";
import { httpGetContent, httpUpdateContent } from "../hooks/requests";
import io from "socket.io-client";

const socket = io("http://localhost:8000");

const Document = () => {
  const [content, setContent] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeoutRef = useRef(null);

  const getContent = useCallback(async () => {
    const fetchedContent = await httpGetContent();
    setContent(fetchedContent.content);
  }, []);

  useEffect(() => {
    getContent();
  }, [getContent]);

  useEffect(() => {
    socket.on("connect", () => {});

    socket.on("content update from server", (newContent) => {
      if (!isTyping) {
        setContent(newContent);
      }
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      
      socket.off("content update from server");
      socket.off("connect");
      socket.off("disconnect");
    };
  }, [isTyping]);

  const handleChange = (e) => {
    setContent(e.target.value);
    setIsTyping(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
      updateContent(e.target.value);
    }, 300); // debounc

    socket.emit("content update", e.target.value); 
  };

  const updateContent = useCallback(async (newContent) => {
    await httpUpdateContent({ content: newContent });
  }, []);

  // tab functionality
  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const spaces = "    ";
      const newValue =
        content.substring(0, start) + spaces + content.substring(end);
      setContent(newValue);

      setTimeout(() => {
        
        e.target.selectionStart = e.target.selectionEnd = start + spaces.length;
      }, 0);
    }
  };

  return (
    <div style={styles.documentContainer}>
      <div style={styles.toolbar}>
        <h2 style={styles.toolbarTitle}>
          Real Time Collaboration Document Editor
        </h2>
      </div>
      <div style={styles.editorContainer}>
        <textarea
          value={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          style={styles.editor}
          placeholder="Start typing your document..."
        />
      </div>
    </div>
  );
};

const styles = {
  documentContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    height: "100vh",
    boxSizing: "border-box",
    backgroundColor: "#f1f3f4",
  },
  toolbar: {
    backgroundColor: "#ffffff",
    width: "100%",
    padding: "10px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  toolbarTitle: {
    margin: "0 auto",
    fontSize: "1.5rem",
    textAlign: "center",
  },
  editorContainer: {
    backgroundColor: "#ffffff",
    width: "816px", // Keep at 816 to match Google Docs default width
    marginTop: "20px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  editor: {
    width: "100%",
    height: "100%",
    border: "none",
    outline: "none",
    resize: "none",
    fontSize: "1rem",
    lineHeight: "1.5",
    boxSizing: "border-box",
  },
};

export default Document;
