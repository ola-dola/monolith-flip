import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch('/api/greeting?name=bobby')
    .then(res => {
      console.log('First then', res);
      res.json();
    })
    .then(greeting => setGreeting(greeting))
    .catch(error => {
      debugger
    })
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        { greeting }
      </header>
    </div>
  );
}

export default App;
