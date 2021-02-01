import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="4ff83939-18cb-4e23-b223-5975f76f9923"
      userName="admin"
      userSecret="Pass123"
    />
  );
};

export default App;
