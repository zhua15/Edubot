import React, { useState, useEffect } from "react";
import "./App.css";
import TitleSection from "./sections/TitleSection";
import PromptSection from "./sections/PromptSection";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <TitleSection></TitleSection>
      <h1>{message}</h1>
      <PromptSection></PromptSection>
    </div>
  );
}

export default App