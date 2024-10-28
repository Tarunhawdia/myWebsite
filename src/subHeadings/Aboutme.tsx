import React from "react";
import pic from "../assets/pic.jpg";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section">
      <img src={pic} alt="tarun hawdia profile pic" loading="lazy" />
      <h1 className="sub_headings">About Me</h1>
      <p>
        Hi! I am Tarun, a Software Engineer at ArthmateTech Pvt. Ltd. with a
        strong academic foundation in Biomedical Science and Electrical
        Engineering, holding an M.Tech from IIT Guwahati and a B.Tech from
        Ujjain Engineering College.
      </p>

      <p>
        Although I don't hold a CS degree, I’ve gained extensive knowledge
        through YouTube, online courses, and blogs. At Arthmatetech, I enhance
        backend systems with Node.js and Java, while developing frontend
        applications using ReactJS. My expertise spans web development, machine
        learning, and automation testing.
      </p>

      <p>
        Previously, I developed an Android app for Great India Bathroom Fittings
        using React Native, Express.js, and MongoDB, integrating Google AdMob
        for monetization.
      </p>

      <p>
        I’m passionate about problem-solving, having solved 500+ DSA questions
        on platforms like LeetCode and Codeforces. Additionally, I enjoy
        embedded systems, demonstrated by my internship designing Arduino-based
        robots.
      </p>

      <p>
        A chess enthusiast, I won a gold medal at IIT Guwahati. With a strong
        technical skill set and constant drive to learn, I enjoy tackling
        challenges and building scalable systems.
      </p>
    </section>
  );
};

export default AboutMe;
