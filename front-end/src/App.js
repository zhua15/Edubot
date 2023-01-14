import React, { useState, useEffect } from "react";
import "./App.css";
import TitleSection from "./sections/TitleSection";
import PromptSection from "./sections/PromptSection.tsx";

function App() {
  // const [message, setMessage] = useState("");

  // useEffect(() => {
  //   fetch("http://localhost:8080/message")
  //     .then((res) => res.json())
  //     .then((data) => setMessage(data.message));
  // }, []);

  return (
    <div className="App">
      <TitleSection></TitleSection>
      <br></br>
      <PromptSection></PromptSection>
    </div>
  );
}

export default App