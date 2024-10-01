import React from "react";
import iitglogo from "../assets/iitg.png";
import ueculogo from "../assets/uecu.png"
import "./Education.css";

const Education: React.FC = () => {
  return (
    <section id="Education" className="section">
      <h1 className="sub_headings">Education</h1>
      <div className="Education_container">
        <div className="college_tile">
          <a
            href="https://www.iitg.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={iitglogo} alt="iitg logo" className="college_logo" />
          </a>
          <div className="college_info">
            <a
              href="https://www.iitg.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="college_title">
                Indian Institute of Techonology (IIT), Guwahati
              </p>
            </a>
            <p> M.Tech in Biomedical Science and Technology</p>
            <p>8.8/10 cgpa</p>
          </div>
        </div>
      </div>

      <div className="Education_container">
        <div className="college_tile">
          <a
            href="https://www.uecu.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img src={ueculogo} alt="iitg logo" className="college_logo" />
          </a>
          <div className="college_info">
            <a
              href="https://www.uecu.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <p className="college_title">
                Ujjain Engineering College, Ujjain
              </p>
            </a>
            <p> B.Tech in Electrical Engineering</p>
            <p>6.77/10 cgpa</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
