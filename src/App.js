import React from "react";
import {Link, Route, Routes} from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to = "/">Home</Link> - <Link to = "/ablut">about</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ablut" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
