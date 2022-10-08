import React from "react";
import "./Section.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faEnvelope,
  faHandshake,
  faFontAwesome,
  faCalendarPlus,
  faGem,
} from "@fortawesome/free-regular-svg-icons";

function Section() {
  return (
    <div>
      <h1>
        why we can be entrusted with the{" "}
        <span style={{ color: "#00BF81" }}>development</span> of your{" "}
        <span style={{ color: "#00BF81" }}> businress</span>?{" "}
      </h1>
      <div className="grid">
        <ul className="class">
          <li>
            <FontAwesomeIcon icon={faFileCode} style={{ fontSize: "40px" }} />
            <h3>Mobile Development</h3>
            <p>
              sampile text. clike to select the text box.
              <br /> click again or double click to start
              <br />
              editing the text. Excepture sint occarcat
              <br />
              cupidatat non proident.
            </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "40px" }} />
            <h3>Mobility Services</h3>
            <p>
              sampile text. clike to select the text box.
              <br /> click again or double click to start
              <br />
              editing the text. Excepture sint occarcat
              <br />
              cupidatat non proident.
            </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faHandshake} style={{ fontSize: "40px" }} />
            <h3>Software Consulting</h3>
            <p>
              sampile text. clike to select the text box.
              <br /> click again or double click to start
              <br />
              editing the text. Excepture sint occarcat
              <br />
              cupidatat non proident.
            </p>
          </li>

          <li>
            <FontAwesomeIcon
              icon={faFontAwesome}
              style={{ fontSize: "40px" }}
            />
            <h3>Team Extension</h3>
            <p>
              sampile text. clike to select the text box.
              <br /> click again or double click to start
              <br />
              editing the text. Excepture sint occarcat
              <br />
              cupidatat non proident.
            </p>
          </li>

          <li>
            <FontAwesomeIcon
              icon={faCalendarPlus}
              style={{ fontSize: "40px" }}
            />
            <h3>Application Services</h3>
            <p>
              sampile text. clike to select the text box.
              <br /> click again or double click to start
              <br />
              editing the text. Excepture sint occarcat
              <br />
              cupidatat non proident.
            </p>
          </li>

          <li>
            <FontAwesomeIcon icon={faGem} style={{ fontSize: "40px" }} />
            <h3>Maintenance & Support</h3>
            <p>
              sampile text. clike to select the text box.
              <br /> click again or double click to start
              <br />
              editing the text. Excepture sint occarcat
              <br />
              cupidatat non proident.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Section;
