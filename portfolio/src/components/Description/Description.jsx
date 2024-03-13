import React from "react";
import image from "./coachProva.jpg";
import "./Description.css";
import GithubIcon from "../Icons/GithubIcon";
import IgIcon from "../Icons/IgIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";

const Description = () => {
  return (
    <div className="description-container">
      <div className="first-section">
        <img src={image} alt="" className="image" />
        <h2 className="title">
          Junior <br /> Frontend <br /> Developer
        </h2>
      </div>
      <div className="second-section">
        <p className="desc-content">
          Ciao! Sono Marco, un Junior Frontend Developer, il coding mi
          appassiona e mi diverte. Ho una solida base in HTML, CSS e JavaScript
          e React. Il mio viaggio è iniziato da poco e non ho intenzione di
          fermarmi allo sviluppo frontend.
        </p>
        <div className="icons-container">
          <GithubIcon className={"icon"} />
          <IgIcon className={"icon"} />
          <LinkedinIcon className={"icon"} />
        </div>
      </div>
    </div>
  );
};

export default Description;
