import React from "react";
import image from "./coachProva.jpg";
import coding_image from "./coding.jpg";
import "./Description.css";
import GithubIcon from "../Icons/GithubIcon";
import IgIcon from "../Icons/IgIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import GmailIcon from "../Icons/GmailIcon";

const Description = () => {
  return (
    <div className="home-container">
      <div className="description-container">
        <div className="first-section">
          <img src={image} alt="" className="my-image" />
          <h2 className="desc-title">
            Marco <br /> Agostinello
          </h2>
        </div>
        <div className="second-section">
          <p className="desc-content">
            Sono un Frontend Developer, la mia carriera è appena iniziata.
            Ho una solida base in HTML, CSS e JavaScript e React ma conoscere
            nuove tecnologie e linguaggi non mi spaventa!
          </p>
          <div className="icons-container">
            <a className="a" href="https://www.instagram.com/marco_agostinello/">
              <IgIcon className={"icon"} />
            </a>
            <a className="a" href="https://github.com/MarcolinoA">
              <GithubIcon className={"icon"} />
            </a>
            <a className="a" href="mailto:marcoagostinello@protonmail.com">
              <GmailIcon className={"icon"} />
            </a>
            <a className="a"  href="https://linkedin.com/in/marco-agostinello-2576572b5/">
              <LinkedinIcon className={"icon"} />
            </a>
          </div>
        </div>
      </div>

      <div className="image-container">
        <img src={coding_image} alt="" className="coding-img" />
      </div>
    </div>
  );
};

export default Description;
