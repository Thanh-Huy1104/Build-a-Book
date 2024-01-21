import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { Book } from './components/Book/Book';

function App() {
  const [input, setInput] = useState("");

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home input={input} setInput={setInput}/>}/>
          <Route path="/book/:input" element={<Book input={input}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
