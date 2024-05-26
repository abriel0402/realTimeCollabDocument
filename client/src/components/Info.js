import React, { useState } from "react";
import Home from "./Home";

const Info = ({ switchToHome }) => {
  const handleMouseOverCenter = (e) => {
    e.target.style.backgroundColor = "#F7F7F7";
  };
  const handleMouseOutCenter = (e) => {
    e.target.style.backgroundColor = "#FFFFFF";
  };

  
  return (
    <div style={styles.documentContainer}>
      <div style={styles.toolbar}>
        <h2 style={styles.toolbarTitle}>
          Real Time Collaboration Document Editor
        </h2>
      </div>

      <div style={styles.mainContainer}>
        <h1>How to use this program</h1>
        <div>
          <p>This is my program, you can use it like this. and this too</p>
        </div>
        <button
          style={{ ...styles.button, ...styles.centerButton }}
          onMouseOver={handleMouseOverCenter}
          onMouseOut={handleMouseOutCenter}
          onClick={switchToHome}
        >
          Back
        </button>
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

export default Info;
