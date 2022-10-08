import React from "react";
import "./App.css";
import Home from "./component/Home";

import { HashLink } from "react-router-hash-link";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import AboutUs from "./component/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navBar">
          <ul className="list">
            <li>
              {/* https://youtu.be/-t6VNZAcVJk */}
              <HashLink to="/">Home</HashLink>
            </li>
            <li>
              <HashLink to="#pricing">Pricing Table</HashLink>
            </li>
            <li>
              <HashLink to="/about">About us</HashLink>
            </li>
            <li>
              <HashLink to="#">join</HashLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
