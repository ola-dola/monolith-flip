import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");
  const [name, setName] = useState("");

  const updateGreeting = () => {
    fetch(`/api/greeting?name=${name}`)
      .then((res) => res.json())
      .then((greeting) => {
        // debugger;
        // alert("oops fellas. Nice of you to show up!");
        setGreeting(greeting);
      })
      .catch((error) => {
        // debugger;
      });
  };

  useEffect(() => {
    fetch("/api/greeting?name=bobby")
      .then((res) => res.json())
      .then((greeting) => {
        // debugger;
        setGreeting(greeting);
      })
      .catch((error) => {
        // debugger;
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {greeting}

        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={updateGreeting}>Update</button>
        </div>
      </header>
    </div>
  );
}

export default App;
