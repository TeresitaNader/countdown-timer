// Use "npm start"

import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Counting Down to 2024: May the Odds Be Ever in Your Favor!
      </header>
      <nav>
        {/* Navigation Bar */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main className="App-content">
        {/* Main content of your app */}
        <section>
          {/* A section for a specific group of content */}
          <h2>Upcoming Events</h2>
          <p>Details about upcoming events for the year 2024.</p>
        </section>
        <article>
          {/* An article or a blog post */}
          <h2>New Year Resolutions</h2>
          <p>How to set and achieve your goals in 2024.</p>
        </article>
      </main>
      <aside>
        {/* Sidebar content, like links or advertisements */}
        <h3>Special Offers</h3>
        <p>Check out these New Year special deals!</p>
      </aside>
      <footer className="App-footer">
        <p>© 2023 Countdown to 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

