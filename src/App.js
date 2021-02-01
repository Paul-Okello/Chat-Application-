import React from "react";
import { ChatEngine } from "react-chat-engine";
import "./App.css";

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="1d8b6530-98eb-4c4a-998c-82a81f82a932"
      userName="admin"
      userSecret="Pass123"
    />
  );
};

export default App;
