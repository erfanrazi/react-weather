import React from "react";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <small>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/elhamiakbari/react-weather"
          className="githubLink"
        >
          Open-source code
        </a>{" "}
        by Elham Akbari
      </small>
    </div>
  );
}