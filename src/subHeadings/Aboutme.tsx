import React from "react";
import pic from "../assets/pic.jpg";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="section">
      <img src={pic} alt="tarun hawdia profile pic" loading="lazy" />
      <h1 className="sub_headings">About Me</h1>
      <p>
        Hi! I am Tarun, a software developer working at ArthmateTech Pvt. Ltd.
      </p>
      <p>
        I am a Software Engineer with a strong academic foundation in Biomedical
        Science and Electrical Engineering, holding an M.Tech from IIT Guwahati
        and a B.Tech from Ujjain Engineering College.
      </p>
      <p>
        Although I do not have a CS degree, I am obsessed with computer science.
        I got most of my knowledge by watching YouTube videos, taking online
        courses, and reading lots of blogs.
      </p>
      <p>
        Currently, I am working at Arthmatetech Pvt. Ltd., where I enhance
        backend systems using Node.js and Java, and develop frontend
        applications with ReactJS . My technical expertise spans web
        development, machine learning, and automation testing.
      </p>
      <p>
        Previously, I worked at Great India Bathroom Fittings, where I developed
        an Android app using React Native, Express.js, and MongoDB, and
        integrated Google AdMob for monetization. Additionally, I have a deep
        interest in embedded systems, demonstrated by my internship, where I
        designed robots using Arduino.
      </p>
      <p>
        Additionally, I have a deep interest in embedded systems, demonstrated
        by my internship, where I designed robots using Arduino.
        <p>
          I am passionate about problem-solving, having solved 500+ DSA
          questions on competitive platforms like LeetCode and Codeforces.
        </p>
      </p>
      <p>
        I am also an enthusiastic chess player, winning a gold medal in an
        inter-hostel competition at IITG. With a strong technical skillset and a
        constant drive to learn, I enjoy tackling challenges and building
        efficient, scalable systems.
      </p>
    </section>
  );
};

export default AboutMe;
