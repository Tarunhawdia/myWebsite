import React from "react";
import pic from "../assets/pic.jpg";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section">
      <img src={pic} alt="tarun hawdia profile pic" loading="lazy" />
      <h1 className="sub_headings">About Me</h1>
      <p>
        Hi! I’m <strong>Tarun Hawdia</strong>, a Software Developer with 1.6
        years of experience and an academic background in Biomedical Science and
        Electrical Engineering (M.Tech from IIT Guwahati). Skilled in backend
        (Node.js, Java) and frontend (ReactJS), I enhance systems and develop
        applications.
      </p>
      <p>
        At <strong>ArthmateTech</strong>, I focused on scalable backend
        solutions using Node.js, React, and MongoDB. Previously, I built an
        Android app with React Native and Express.js for Great India Bathroom
        Fittings, integrating Google AdMob for monetization.
      </p>
      <p>
        Passionate about problem-solving, I’ve solved 500+ DSA questions and
        enjoy embedded systems and robotics. I’m also a chess enthusiast and IIT
        Guwahati gold medalist.
      </p>
    </section>
  );
};

export default AboutMe;
