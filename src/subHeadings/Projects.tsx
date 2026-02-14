import React from "react";
import logoChess from "../assets/chess.png";
import logoChat from "../assets/chatapp.png";
import logoThesis from "../assets/deeplearning.jpeg";
import logoHttp from "../assets/httpserver.png";
import logoHeart from "../assets/heartprediction.png";
import logoPaddle from "../assets/paddle.png";

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Chess WebApp using Typescript",
      description: "Developed a functional chess game with React.js, emphasizing OOP’s design principles for a seamless experience. Features real-time move validation and a modern responsive UI.",
      link: "https://my-chess-app-one.vercel.app/",
      repo: "https://github.com/Tarunhawdia/myChessApp",
      logo: logoChess
    },
    {
      title: "Real-time Chat Web Application",
      description: "Full-stack real-time chatting application using Node.js, Socket.io, and MongoDB. Secure user authentication and real-time data persistence.",
      link: "https://chat-app-b8ra.onrender.com/chats",
      repo: "https://github.com/Tarunhawdia/Chat-app",
      logo: logoChat
    },
    {
      title: "Respiratory Rate Calculation (Master's Thesis)",
      description: "Master's thesis at IIT Guwahati. Implemented the RR-WaveNet Deep learning model for predictive analysis of PPG sensor data to calculate respiratory rates.",
      link: "#",
      repo: "#",
      logo: logoThesis
    },
    {
      title: "HTTP Server in C",
      description: "A low-level HTTP server implemented from scratch in C. Handles concurrent connections and explores the fundamentals of networking and socket programming.",
      link: "https://github.com/Tarunhawdia/HTTPserverinC",
      repo: "https://github.com/Tarunhawdia/HTTPserverinC",
      logo: logoHttp
    },
    {
      title: "Heart Disease Prediction",
      description: "Machine Learning project using Python and Scikit-learn to predict the likelihood of heart disease based on clinical parameters. Achieved high accuracy with various classification models.",
      link: "https://github.com/Tarunhawdia/Heart-disease-predication",
      repo: "https://github.com/Tarunhawdia/Heart-disease-predication",
      logo: logoHeart
    },
    {
      title: "SFML Paddle Game",
      description: "Classic arcade-style paddle game developed using C++ and SFML graphics library. Features smooth physics and retro-inspired game mechanics.",
      link: "https://github.com/Tarunhawdia/SFML-Paddle-Game",
      repo: "https://github.com/Tarunhawdia/SFML-Paddle-Game",
      logo: logoPaddle
    }
  ];

  return (
    <section id="projects" className="section">
      <h1 className="sub_headings">Projects.LIB</h1>

      <div className="projects_container">
        {projectList.map((project, index) => (
          <div className="project_tile" key={index}>
            <a
              href={project.link !== "#" ? project.link : project.repo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                textDecoration: "none",
                color: "inherit",
                borderBottom: "none"
              }}
            >
              <img src={project.logo} alt={`${project.title} Logo`} className="project_logo" />
            </a>
            <div className="project_info">
              <a
                href={project.repo !== "#" ? project.repo : project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "inherit", borderBottom: "none" }}
              >
                <p className="project_title">{project.title}</p>
              </a>
              <p className="project_description">{project.description}</p>
              {project.repo !== "#" && project.repo !== "https://github.com/Tarunhawdia/Chat-app" && (
                <div style={{ marginTop: '10px' }}>
                  <a href={project.repo} target="_blank" style={{ fontSize: '0.8rem', opacity: 0.7, borderBottom: "1px dashed" }}>[ VIEW_SOURCE ]</a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
