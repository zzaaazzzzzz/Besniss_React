import React from "react";
import Section from "./Section";
import About from "./About";
import Pricing from "./Pricing";
import Footer from "./Footer";

import "./Home.css";
function Home() {
  return (
    <div>
      <div className="boss" id="#homme">
        <div className="home">
          <h1 className="title">
            One-click <br /> soultion for your
            <br /> <span style={{ color: "#00BF81" }}> static wepsite.</span>
          </h1>
          <div className="btns">
            <button className="btnUp">Uplode for Free</button>
            <button className="btnWa">watch video</button>
          </div>
        </div>
        <img
          src={require("../undraw_Team_collaboration_re_ow29.png")}
          style={{
            width: "600px",
            margin: "20px",
            position: " absolute ",
            top: "100px",
            left: "650px",
          }}
          alt="zazo"
        />
      </div>
      <Section />
      <About />
      <Pricing />
      <Footer />
    </div>
  );
}
export default Home;
//#00BF81
