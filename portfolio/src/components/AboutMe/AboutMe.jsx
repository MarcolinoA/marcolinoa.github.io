import React from "react";
import "./AboutMeStyle.css";
import GithubIcon from "../Home/Icons/GithubIcon";
import image from "../Home/Description/coachProva.jpg";
import FrontendIcon from "./Frontend";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          voluptatem numquam adipisci, reiciendis architecto aspernatur ducimus
          neque placeat tempore esse repudiandae perferendis inventore commodi
          enim beatae excepturi quisquam fugiat! Neque.
        </h2>
      </div>

      <div className="skills-container">
        <div className="skill-first-section">
          <FrontendIcon className={"icons"} />
          <h4 className="first-skill-title">Frontend Developer</h4>
          <p className="first-skill-p">
            I like to code things from scratch, and enjoy bringing ideas to life
            in the browser.
          </p>
        </div>
        <div className="lenguages-container">
          <h4 className="lenguages-title">Lenguages: </h4>
          <p className="lenguages-list">HTML, CSS, Javascript, React</p>
        </div>
        <div className="tools-container">
          <h4 className="tools-title">Dev Tools: </h4>
          <ul className="tools-list">
            <li className="tool">Git</li>
            <li className="tool">Github</li>
            <li className="tool">VsCode</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
