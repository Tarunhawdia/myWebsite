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
    </section>
  );
};

export default AboutMe;
