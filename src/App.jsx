import { useState } from 'react'
import './App.css'

const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. — Martin Luther King Jr.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. — Ralph Waldo Emerson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
  "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
  "The best time to plant a tree was 20 years ago. The second best time is now. — Chinese Proverb",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "Life is what happens when you're busy making other plans. — John Lennon"
];







function App() {
  const [quote, setQuote] = useState("");

  function generateRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }

  return (
    <>
      <h1>Random Quotes Generator</h1>
      {quote && <p>{quote}</p>}
      <button onClick={generateRandomQuote}>Generate Random Quote</button>
      
    </>
  );
}

export default App;
