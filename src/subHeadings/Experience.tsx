import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "ArthmateTech Pvt. Ltd.",
      title: "Software Engineer",
      period: "July 2024 - Present",
      description: [
        "Engineered and optimized backend services using Node.js and MongoDB for high performance.",
        "Enhanced user experience by developing responsive and dynamic UIs with React.",
        "Worked on microservices architecture and implemented REST APIs.",
        "Collaborated with front-end developers to integrate with React components.",
      ],
    },
    {
      company: "Great India Bathroom Fittings",
      title: "Developer",
      period: "Mar 2021 - Apr 2022",
      description: [
        "Worked on Android app on the play store that displays the latest prices of metals such as Zinc, Brass, etc",
        "Enhanced user experience by developing responsive and dynamic UIs with React.Successfully integrated Google AdMob to monetize the app with targeted advertisements",
        "Worked on microservices architecture and implemented REST APIs.",
        "Collaborated with front-end developers to integrate with React components.Developed the app using React Native for the frontend, Express.js for the Backend and MongoDB as NOSQL DB",
      ],
    },
    {
      company: "Platfourma",
      title: "Project Trainee and Intern",
      period: "May 2018 - July 2018",
      description: [
        "Assisted in the development of full-stack web applications.       Designed and programmed a line-following robot using Arduino Uno, demonstrating embedded C expertise.",
        "I have build several project one of them was an obstacle-avoiding robot with Arduino Uno and infrared sensors, programmed in C.",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <h1 className="sub_headings">Experience</h1>
      <div className="experience_container">
        {experiences.map((exp, index) => (
          <div className="experience_tile" key={index}>
            <h2 className="company_name">{exp.company}</h2>
            <p className="job_title">{exp.title}</p>
            <p className="work_period">{exp.period}</p>
            <ul className="job_description">
              {exp.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
