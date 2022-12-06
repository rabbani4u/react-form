import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleClick(event) {
    setName(event.target.value);
  }
  function handleChange() {
    setHeading(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <input
        onChange={handleClick}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={handleChange}>Submit</button>
    </div>
  );
}

export default App;
