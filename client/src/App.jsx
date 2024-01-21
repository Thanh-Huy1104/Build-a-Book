import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home/Home';
import { Book } from './components/Book/Book';

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/book/:input" element={<Book />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
