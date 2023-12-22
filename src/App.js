// Run local website "npm start"
// Update Github pages "npm run deploy"

import React from "react";
import CountdownTimer from './components/CountdownTimer';
import FortuneTeller from './components/FortuneTeller';
import './App.css';
import videoBg from './assets/videoBg.mp4';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header className="header">
        <video src={videoBg} autoPlay loop muted />
      </header>
      <main className="main-content">
        <h1>Counting Down to 2024</h1>
        <CountdownTimer /> 
        <h2>Fortune Teller</h2>
        <FortuneTeller />
        <h2>Gallery</h2>
        <Gallery />
      </main>
      <footer className="footer">
        <p>© 2023 Countdown to 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

