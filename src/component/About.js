import React from "react";
import "./About.css";
export default function About() {
  return (
    <div>
      <h4>About us</h4>
      <h1 className="about">
        <span style={{ color: "#00BF81" }}>1000+ </span>
        customer using our Application.
      </h1>
      <div className="lis">
        {" "}
        <p>
          <span
            style={{
              padding: "0px 8px",
              backgroundColor: "#00BF81",
              borderRadius: "100%",
              marginRight: "5px",
            }}
          />
          Powerful and flexible them
        </p>
        <p>
          {" "}
          <span
            style={{
              padding: "0px 8px",
              backgroundColor: "#00BF81",
              borderRadius: "100%",
              marginRight: "5px",
            }}
          />{" "}
          Simple, transparent pricing
        </p>
        <p>
          {" "}
          <span
            style={{
              padding: "0px 8px",
              backgroundColor: "#00BF81",
              borderRadius: "100%",
              marginRight: "5px",
            }}
          />
          Build tools and full documention
        </p>
      </div>
      <button className="btnRe"> Read More </button>
      <img
        src={require("../6b3f6ba6826440ae99.jpg")}
        style={{
          transform: "translate(92px, 100px)",
          width: "29%",
          position: "absolute",
          top: " 1303px",
          left: "709px",
        }}
        alt="zazo"
      />
      <div className="invite">
        <h2 style={{ textAlign: "center" }}>who we are</h2>
        <h1>
          Do you want to start a{" "}
          <span style={{ color: "#00BF81" }}>business</span>, but do have
          experience or doubt? we{" "}
          <span style={{ color: "#00BF81" }}>invite </span>you to cooperate.
        </h1>
        <button
          style={{
            backgroundColor: "#00BF81",
            border: "0px",
            padding: "8px 30px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "30px",
            color: "#fff",
          }}
        >
          {" "}
          Read More{" "}
        </button>
      </div>
    </div>
  );
}
