import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/Home/home";
import { App } from "./pages/MainPage/App";
import "./MainPage.css";

function MainPage() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </Router>
    </div>
  )
}
export default MainPage;
