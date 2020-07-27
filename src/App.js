import React from "react";
import {
  Widget,
  toggleWidget,
  addUserMessage,
  addResponseMessage
} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import "./App.css";

function App() {
  const handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    fetch(
      `https://iss-dialog.uk.r.appspot.com/?text=${encodeURIComponent(
        newMessage
      )}`
    )
      .then(response => response.json())
      .then(data => addResponseMessage(data.text));
  };

  toggleWidget();
  addResponseMessage(
    'Hello! I can tell you a few things about the international space station. Try asking: "Where is the ISS?" or "When is the next pass over 48.8584, 2.2945?"'
  );
  return (
    <div className="App">
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        fullScreenMode={true}
        title={"International Space Station Chat Bot"}
        subtitle={"Fun with ML and the ISS API"}
      />
    </div>
  );
}

export default App;
