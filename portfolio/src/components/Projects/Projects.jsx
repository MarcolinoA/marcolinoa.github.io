import React from "react";
import "./ProjectsStyle.css";
import gym_site from "./site.png";
import studying_image from "./studying_image.jpeg";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2 className="projects-title">My last project: </h2>
      <div className="image-container">
        <div className="first-image">
          <img src={gym_site} alt="" className="project-img" />
          <div className="first-content">
            <h1>Sport&Fitness Center</h1>
            <p>(Work in progress)</p>
          </div>
        </div>
        <div className="second-image">
          <img src={studying_image} alt="" className="project-img" />
          <div className="second-content">
            <h1>MERN (MongoDb, Express, React, Node)</h1>
            <p>
              I just started to study and create <br /> the first prototypes
              with the MERN stack
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
