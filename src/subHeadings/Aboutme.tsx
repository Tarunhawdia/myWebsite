import React from "react";
import pic from "../assets/pic.jpg";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section">
      <img src={pic} alt="tarun hawdia profile pic" loading="lazy" />
      <h1 className="sub_headings">About Me</h1>
      <p>
        Hi! I’m <strong>Tarun Hawdia</strong>, a Software Developer with{" "}
        <strong>1.6 years of experience</strong> and an academic background in{" "}
        <strong>Biomedical Science and Electrical Engineering</strong> (M.Tech
        from IIT Guwahati). Skilled in backend development (
        <strong>Java, Node.js</strong>) and frontend (<strong>ReactJS</strong>),
        I specialize in building scalable and efficient systems.
      </p>

      <p>
        At <strong>ArthmateTech</strong>, I developed and optimized backend
        solutions using <strong>Java Spring Boot, Node.js</strong>, and{" "}
        <strong>MongoDB</strong>, contributing to loan processing applications
        with a focus on performance and reliability. I also implemented{" "}
        <strong>RESTful APIs</strong>, integrated third-party services, and
        ensured system stability through rigorous testing.
      </p>

      <p>
        Previously, at Great India Bathroom Fittings, I developed a Java Spring
        Boot backend application, integrating Google AdMob for monetization and
        providing real-time metal price updates through RESTful APIs.
      </p>

      <p>
        Passionate about problem-solving, I’ve solved{" "}
        <strong>500+ DSA questions</strong> and enjoy working on{" "}
        <strong>embedded systems and robotics</strong>. I’m also a chess
        enthusiast and <strong>IIT Guwahati gold medalist</strong>.
      </p>
    </section>
  );
};

export default AboutMe;
