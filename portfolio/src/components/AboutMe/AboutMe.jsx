import React from "react";
import "./AboutMeStyle.css";
import image from "../Home/Description/coachProva.jpg";
import FrontendDeveloper from "./cards/FrontendDeveloper";
import Enthusiast from "./cards/Enthusiast";

const AboutMe = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-intro">
        <h2 className="aboutme-title">Hi, I'm Marco. Nice to meet you!</h2>
        <img src={image} alt="" className="aboutme-image" />
      </div>

      <div className="aboutme-presentation">
        <h2 className="presentation-title">
          I'm a frontend developer and coding enthusiast
        </h2>
        <h2 className="presentation-desc">
          I’m a fourth year student, I just started my journey in the world of
          coding, for now I write code for static sites but I’m studying to
          implement the backend and my knowledge in general. I dream that this
          can become my job and I’ll do everything to make it happen. Sono
          pronto a sviluppare siti nei linguaggi menzionati giu ma non mi
          spaventa il confronto con altre realta
        </h2>
      </div>

      <div className="skills-container">
        <FrontendDeveloper />
        <Enthusiast />
      </div>
    </div>
  );
};

export default AboutMe;
