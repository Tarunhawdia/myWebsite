import React from "react";
import logo from "../assets/chess.png";
import logoChat from "../assets/chatapp.png";
import deeplearninglogo from "../assets/deeplearning.jpeg";

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <h1 className="sub_headings">Projects</h1>

      <div className="projects_container">
        <div className="project_tile">
          <a
            // href="https://github.com/Tarunhawdia/myChessApp"
            href="https://my-chess-app-one.vercel.app/"
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
              // href="https://github.com/Tarunhawdia/myChessApp"
              href="https://my-chess-app-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="project_title">Chess WebApp using Typescript</p>
            </a>
            <p className="project_description">
              Developed chess game with React.js, emphasizing OOP’s design for a
              seamless experience.
            </p>
          </div>
        </div>
      </div>

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
            <img src={logoChat} alt="Project 1 Logo" className="project-logo" />
          </a>
          <div className="project_info">
            <a
              href="https://chat-app-b8ra.onrender.com/chats"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="project_title">
                Real-time chat web application using Node.js and socket.io
              </p>
            </a>
            <p className="project_description">
              Developed and designed a real-time app to interactively connect
              users for individual or group chats.
            </p>
          </div>
        </div>
      </div>

      <div className="projects_container">
        <div className="project_tile">
          <img
            src={deeplearninglogo}
            alt="Project 1 Logo"
            className="project-logo"
          />
          <div className="project_info">
            <p className="project_title">
              Respiratory Rate calculation from PPG sensor data using Deep
              Learning Algorithtms
            </p>
            <p className="project_description">
              This was my Master's thesis project which I did under Prof.
              Harshal B. Nemade(HOD EEE department IITG). In this project
              Trained and implemented the RR-WaveNet Deep learning model for
              predictive analysis in RR calculation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
