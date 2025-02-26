import React from "react"
import { BrowserRouter, Routes, Route } from "react-router";
import Countbutton from './count/Count'
import About from "./about/About";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Countbutton />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
