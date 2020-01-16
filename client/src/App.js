import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch('/api/greeting?name=bobby')
    .then(res => res.json() )
    .then(greeting => {
      debugger
      setGreeting(greeting)
    })
    .catch(error => {
      debugger
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        { greeting }
      </header>
        { greeting }
    </div>
  );
}

export default App;
