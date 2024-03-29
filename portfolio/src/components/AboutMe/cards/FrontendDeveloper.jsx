import React from "react";
import "./Styles.css";
import FrontendIcon from "../Icons/Frontend";

const FrontendDeveloper = () => {
  return (
    <div className="frontend-card">
      <div className="first-section">
        <div className="icon-container">
          <FrontendIcon className={"icons"} />
        </div>
        <h4 className="title">Frontend Developer</h4>
        <p className="p">
          I recently started to develop my projects from scratch trying to sell
          myself to small businesses or freelancers
        </p>
      </div>
      <div className="lenguages-container">
        <h4 className="title">Lenguages: </h4>
        <p className="p">HTML, CSS, Javascript, React</p>
      </div>
      <div className="tools-container">
        <h4 className="title">Dev Tools: </h4>
        <ul className="tools-list">
          <li className="tool">VsCode</li>
          <li className="tool">Git</li>
          <li className="tool">Github</li>
        </ul>
      </div>
    </div>
  );
};

export default FrontendDeveloper;
