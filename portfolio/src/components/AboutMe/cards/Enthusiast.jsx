import React from "react";
import "./Styles.css";
import FrontendIcon from "../Icons/Frontend";
import StackIcon from "../Icons/StackOverflow";

const Enthusiast = () => {
  return (
    <div className="frontend-card">
      <div className="first-section">
        <div className="icon-container">
          <StackIcon className={"icons"} />
        </div>
        <h4 className="title">Coding Enthusiast</h4>
        <p className="p">
          I love experimenting, studying new languages and expanding my
          knowledge
        </p>
      </div>
      <div className="lenguages-container">
        <h4 className="title">I'm studying: </h4>
        <p className="p">Node.js, Python, Java</p>
      </div>
      <div className="tools-container">
        <h4 className="title">Studying Tools: </h4>
        <ul className="tools-list">
          <li className="tool">Personal projects</li>
          <li className="tool">Youtube</li>
          <li className="tool">Stackoverflow</li>
        </ul>
      </div>
    </div>
  );
};

export default Enthusiast;
