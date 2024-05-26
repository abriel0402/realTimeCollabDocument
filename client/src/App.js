import React, { useState } from "react";
import Home from "./components/Home";
import Info from "./components/Info";
import EnterCode from "./components/EnterCode";
import Document from "./components/Document";

function App() {
  const [currComponent, setCurrComponent] = useState("Home");
  
  const renderComponent = () => {
    switch (currComponent) {
      case "Home":
        return <Home switchToInfo={() => setCurrComponent("Info")} switchToEnterCode={() => setCurrComponent("EnterCode")} switchToDocument={() => setCurrComponent("Document")} />;
      case "Info":
        return <Info switchToHome={() => setCurrComponent("Home")} />;
      case "EnterCode":
        return <EnterCode switchToHome={() => setCurrComponent("Home")} />;
      case "Document":
        return <Document switchToHome={() => setCurrComponent("Home")} />;
      default:
        return <Home switchToInfo={() => setCurrComponent("Info")} switchToEnterCode={() => setCurrComponent("EnterCode")} switchToDocument={() => setCurrComponent("Document")} />;
    }
  };
  // return: {renderComponent()}

  return (
    <div>
      <Document />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.5/socket.io.js"
        integrity="sha512-luMnTJZ7oEchNDZAtQhgjomP1eZefnl82ruTH/3Oj/Yu5qYtwL7+dVRccACS/Snp1lFXq188XFipHKYE75IaQQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
    </div>
  );
}

export default App;
