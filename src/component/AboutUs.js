import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Footer from "./Footer";
import { AiOutlineTwitter } from "react-icons/ai";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <h1>
        About our <span style={{ color: "#00bf81" }}>Perfect Team </span>
      </h1>
      <p>
        Cupidatat sit incididunt ex sint sunt. Aute aliquip commodo ipsum magna
        dolore commodo mollit. Lorem exercitation et id nisi Lorem ex eu in eu
        ex deserunt laboris mollit amet. Et ipsum eu mollit aliqua voluptate
        excepteur aliquip ex laborum. Ex deserunt tempor anim eu Lorem ex anim
        aliquip voluptate nisi pariatur Aute reprehenderit eu in est qui mollit.
      </p>
      <div className="navImg">
        <ul className="Imag">
          <li>
            <img
              src={require("../istockphoto-1378996666-170667a.jpg")}
              style={{
                width: "250px",
              }}
              alt="zazo"
            />
            <h3>pail larson</h3>
            <FaFacebookF className="Icon" />
            <FaInstagram className="Icon" />
            <AiOutlineTwitter className="Icon" />
          </li>
          <li>
            <img
              src={require("../istockphoto-1369778725-170667a.jpg")}
              style={{
                width: "250px",
              }}
              alt="zazo"
            />
            <h3>marry hudson </h3>
            <FaFacebookF className="Icon" />
            <FaInstagram className="Icon" />
            <AiOutlineTwitter className="Icon" />
          </li>
          <li>
            <img
              src={require("../raamin-ka-1VRzNp4TJs4-unsplash.jpg")}
              style={{
                width: "250px",
              }}
              alt="zazo"
            />
            <h3>nina scavo</h3>
            <FaFacebookF className="Icon" />
            <FaInstagram className="Icon" />
            <AiOutlineTwitter className="Icon" />
          </li>
          <li>
            <img
              src={require("../vahid-kanani-qiMCJHg2vTI-unsplash.jpg")}
              style={{
                width: "250px",
              }}
              alt="zazo"
            />
            <h3>dade naw</h3>
            <FaFacebookF className="Icon" />
            <FaInstagram className="Icon" />
            <AiOutlineTwitter className="Icon" />
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
