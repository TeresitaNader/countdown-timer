// Use "npm start"

import React from "react";
import CountdownTimer from './components/CountdownTimer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        May the Odds Be Ever in Your Favor!
      </header>
      <main className="main-content">
        <h1>Counting Down to 2024</h1>
        <CountdownTimer /> 
      </main>
      <footer className="footer">
        <p>© 2023 Countdown to 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

