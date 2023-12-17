import React, { useState } from 'react';
import './FortuneTeller.css';

const fortunes = [

  "In the words of Jane Austen, 'It isn't what we say or think that defines us, but what we do.' This year, you'll do something unexpectedly fabulous!",
  "Remember Bilbo's words in 'The Hobbit': 'Adventures are not all pony-rides in May-sunshine.' But for you, this year will be an exception - expect pony-rides and sunshine aplenty!",
  "Channeling Sherlock Holmes: 'The game is afoot!' Prepare for a year of mysteries, all of which lead to delightful surprises.",
  "As Dumbledore said, Happiness can be found, even in the darkest of times, if one only remembers to turn on the light. Your 2023 will be filled with light and laughter!",
  "Borrowing from 'The Great Gatsby', remember: 'So we beat on, boats against the current.' But for you, the current will turn in your favor, leading to joyous and successful ventures!",
  "In the spirit of Dr. Seuss, 'Oh, the Places You'll Go!' This year promises new adventures, new friends, and lots of laughter.",
  "As Frodo in 'The Lord of the Rings' learned, even the smallest person can change the course of the future. This year, your small acts of kindness will bring great joy to many.",
  "'To thine own self be true,' said Polonius in 'Hamlet.' This year, your true self will shine brightly, bringing happiness and humor to all around you.",
  "In the vein of 'Pride and Prejudice,' it is a truth universally acknowledged that this year is going to be one of your best yet - filled with laughter, love, and unexpected delights.",
  "Channelling 'Alice in Wonderland,' sometimes you'll believe as many as six impossible things before breakfast, starting with how incredibly awesome this year will be for you!",
  "Drawing from 'The Old Man and the Sea' by Hemingway: 'A man can be destroyed but not defeated.' This year, you'll triumph over challenges and emerge stronger than ever!",
  "Inspired by 'Les Misérables': 'Even the darkest night will end and the sun will rise.' This year brings the dawn of new successes and the triumph over past challenges.",
  "In the spirit of Albus Dumbledore in 'Harry Potter': 'It matters not what someone is born, but what they grow to be.' Your growth this year will be astonishing, leading you to new heights of achievement and self-discovery.",
  "Echoing the resilience shown in 'To Kill a Mockingbird': 'Real courage is when you know you're licked before you begin, but you begin anyway and see it through no matter what.' This year, your courage will lead to unexpected victories and joy.",
  "As Frank Herbert wrote in 'Dune': 'Fear is the mind-killer.' In 2023, you'll face fears head-on, overcoming obstacles with a bravery that inspires everyone around you."

];

const FortuneTeller = () => {
  const [fortune, setFortune] = useState('');

  const tellFortune = () => {
    const randomNumber = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomNumber]);
  };

  const reset = () => {
    setFortune('');
  };

  return (
    <div className="Fortune">
      {/* aria-label=" " is to increase accesibility */}
      <button className="button fortune-button" onClick={tellFortune} aria-label="Tell Fortune">Discover What Awaits You in the New Year!</button>
      <button className="button fortune-reset" onClick={reset} aria-label="Reset Fortune">Reset</button>
      <div className="fortune-text">{fortune}</div>
    </div>
  );
}

export default FortuneTeller;
