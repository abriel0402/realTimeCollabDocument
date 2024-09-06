import React, { useState, useCallback } from "react";
import Info from "./Info";
import { httpCreateDocument } from "../hooks/requests";
import Document from "./Document";
const Home = ({ switchToInfo, switchToEnterCode }) => {
  const [username, setUsername] = useState("");
  const [document, setDocument] = useState();

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = "#333333";
  };

  const handleMouseOverCenter = (e) => {
    e.target.style.backgroundColor = "#F7F7F7";
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = "#000000";
  };

  const handleMouseOutCenter = (e) => {
    e.target.style.backgroundColor = "#FFFFFF";
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const createDocument = useCallback(async () => {
    const fetchedDocument = await httpCreateDocument();
    setDocument(fetchedDocument);
  }, []);
  if (document) {
    return <Document document={document} />;
  }
  return (
    <div style={styles.documentContainer}>
      <div style={styles.toolbar}>
        <h2 style={styles.toolbarTitle}>
          Real Time Collaboration Document Editor
        </h2>
      </div>
      <div style={styles.usernameContainer}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Enter your username"
          style={styles.input}
        />
      </div>
      <div style={styles.mainContainer}>
        <div style={styles.buttonWrapper}>
          <button
            style={{ ...styles.button, ...styles.leftButton }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={createDocument}
          >
            Create New Document
          </button>
          <button
            style={{ ...styles.button, ...styles.centerButton }}
            onMouseOver={handleMouseOverCenter}
            onMouseOut={handleMouseOutCenter}
            onClick={switchToInfo}
          >
            Info
          </button>
          <button
            style={{ ...styles.button, ...styles.rightButton }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={switchToEnterCode}
          >
            Join via Code
          </button>
        </div>
        <div></div>
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
  usernameContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "40px",
  },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000000",
    color: "#ffffff",
    border: "none",
    padding: "20px 40px",
    fontSize: "1.2rem",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    margin: "0",
  },
  leftButton: {
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    marginRight: "0",
  },
  rightButton: {
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    marginLeft: "0",
  },
  centerButton: {
    margin: "0 auto",
    color: "black",
    backgroundColor: "white",
  },
  input: {
    padding: "15px",
    fontSize: "1.2rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
};

export default Home;
