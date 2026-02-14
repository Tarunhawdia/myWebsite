import React from "react";
import "./Experience.css";

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Data Nimbus",
      title: "Backend Developer",
      period: "Sept 2025 - Present",
      description: [
        "Working as a Backend Developer specializing in Golang.",
        "Implemented payment orchestration systems to streamline transaction processing.",
        "Developed and managed escrow-related payment technologies.",
      ],
    },
    {
      company: "Emotorad",
      title: "Software Development Engineer",
      period: "Nov 2024 - Sept 2025",
      description: [
        "Offered a full-time role after demonstrating strong performance as a Software Engineer Intern.",
        "Designed and set up the internal dashboard from scratch using the MERN stack with TypeScript, enabling real-time debugging and analytics of incoming data streams.",
        "Built high-performance RESTful APIs using Golang and PostgreSQL, optimizing data retrieval, processing, and management.",
        "Implemented real-time data pipelines using Apache Flink in Java for calorie-based activity analytics, enabling dynamic reward allocation for eBike users.",
        "Developed microservices adhering to principles like Single Responsibility, High Cohesion, and Low Coupling, ensuring a clean, modular architecture and streamlined developer ownership.",
        "Built a live leaderboard system using Redis Sorted Sets to rank users in real time based on coin accumulation.",
        "Integrated AWS-managed infrastructure with Kafka Streams for seamless inter-service communication and real-time analytics.",
        "Optimized AWS costs by leveraging AWS Lambda functions and implementing S3 Lifecycle Policies for automated archival of stale data.",
        "Presented real-time analytics on dashboards by integrating data from AWS Glue and Crawlers, ensuring up-to-date and actionable insights.",
      ],
    },
    {
      company: "ArthmateTech Pvt. Ltd.",
      title: "Software Engineer",
      period: "July 2024 - Oct 2024",
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
        "Worked on Android app on the play store that displays the latest prices of metals such as Zinc, Brass, etc.",
        "Enhanced user experience by developing responsive and dynamic UIs with React. Successfully integrated Google AdMob to monetize the app with targeted advertisements.",
        "Worked on microservices architecture and implemented REST APIs.",
        "Collaborated with front-end developers to integrate with React components. Developed the app using React Native for the frontend, Express.js for the backend, and MongoDB as NoSQL DB.",
      ],
    },
    {
      company: "Platfourma",
      title: "Project Trainee and Intern",
      period: "May 2018 - July 2018",
      description: [
        "Assisted in the development of full-stack web applications.",
        "Designed and programmed a line-following robot using Arduino Uno, demonstrating embedded C expertise.",
        "Built several projects, one of them being an obstacle-avoiding robot with Arduino Uno and infrared sensors, programmed in C.",
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
