import React from "react";
import logo from "../assets/logo_stc.png";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h1 className="sub_headings">Projects</h1>
      <div className="projects_container">
        <div className="project_tile">
          <a
            href="https://github.com/Tarunhawdia/myChessApp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={logo} alt="Project 1 Logo" className="project-logo" />
          </a>
          <div className="project_info">
            <a
              href="https://github.com/Tarunhawdia/myChessApp"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="project_title">Project 1</p>
            </a>
            <p className="project_description">
              A brief description of Project 1. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit Lorem ipsum, dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
