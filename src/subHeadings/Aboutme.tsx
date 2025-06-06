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
        <strong>Java, Node.js, Golang</strong>) and frontend (
        <strong>ReactJS</strong>), I specialize in building scalable and
        efficient systems.
      </p>

      <p>
        <strong>Currently at Emotorad</strong> (Nov 2024 - Present), I work as a
        Software Development Engineer, where I designed and set up an internal
        dashboard from scratch using the MERN stack with TypeScript, enabling
        real-time debugging and analytics of incoming data streams. I build
        high-performance RESTful APIs with Golang and PostgreSQL, and implement
        real-time data pipelines using Apache Flink in Java for activity
        analytics. My work includes developing microservices, integrating
        AWS-managed infrastructure, and optimizing costs with AWS Lambda and S3
        Lifecycle Policies.
      </p>

      <p>
        At <strong>ArthmateTech</strong>, I engineered and optimized backend
        services using <strong>Node.js</strong> and <strong>MongoDB</strong>,
        and developed responsive UIs with React. I contributed to microservices
        architecture, implemented REST APIs, and collaborated closely with
        frontend teams.
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
