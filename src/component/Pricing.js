import React from "react";
import "./Pricing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

function Pricing() {
  return (
    <div className="pricing" id="pricing">
      <h1>Pricing Table</h1>
      <p>
        The href attribute requires a valid value to be accessible. Provide a
        valid,but still need the element to resemble a link, navigable address
        as the href value.
      </p>
      <ul className="list2">
        <li>
          <h5> Web Desing</h5>
          <h2>$19,99</h2>
          <h6>Heading Here</h6>
          <p style={{ borderTop: "1px solid #00bf81" }}>
            Beautifully Designed{" "}
          </p>
          <p style={{ borderTop: "1px solid #00bf81" }}>100% Responsive </p>
          <p style={{ borderTop: "1px solid #00bf81" }}> Smooth interaction</p>
          <p style={{ borderTop: "1px solid #00bf81" }}>Great support </p>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            style={{ fontSize: "30px", marginTop: "20px" }}
          />
        </li>
        <li>
          <h5> Web Desing</h5>
          <h2>$19,99</h2>
          <h6>Heading Here</h6>
          <p style={{ borderTop: "1px solid #00bf81" }}>
            Beautifully Designed{" "}
          </p>
          <p style={{ borderTop: "1px solid #00bf81" }}>100% Responsive </p>
          <p style={{ borderTop: "1px solid #00bf81" }}> Smooth interaction</p>
          <p style={{ borderTop: "1px solid #00bf81" }}>Great support </p>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            style={{ fontSize: "30px", marginTop: "20px" }}
          />
        </li>
        <li>
          <h5> Web Desing</h5>
          <h2>$19,99</h2>
          <h6>Heading Here</h6>
          <p style={{ borderTop: "1px solid #00bf81" }}>
            Beautifully Designed{" "}
          </p>
          <p style={{ borderTop: "1px solid #00bf81" }}>100% Responsive </p>
          <p style={{ borderTop: "1px solid #00bf81" }}> Smooth interaction</p>
          <p style={{ borderTop: "1px solid #00bf81" }}>Great support </p>
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            style={{ fontSize: "30px", marginTop: "20px" }}
          />
        </li>
      </ul>
    </div>
  );
}

export default Pricing;
