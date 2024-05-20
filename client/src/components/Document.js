import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import _ from "lodash";
import { httpGetContent, httpUpdateContent } from "../hooks/requests";

const Document = () => {
  const [content, setContent] = useState("");

  const getContent = useCallback(async () => {
    const fetchedContent = await httpGetContent();
    setContent(fetchedContent.content);
  }, []);

  useEffect(() => {
    getContent()
    console.log("got content")
    console.log(content.content)
    console.log(content)
  }, [])

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const updateContent = useCallback(async () => {
    
    await httpUpdateContent({ content });
    console.log("Content updated successfully");
      
  }, [content]);


  useEffect(() => {
    updateContent()
    console.log("test log")
  }, [content])

  return (
    <div>
      <h2 style={{}}>Real Time Collaboration Document Editor</h2>
      <textarea
        value={content}
        onChange={handleChange}
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
};

export default Document;
