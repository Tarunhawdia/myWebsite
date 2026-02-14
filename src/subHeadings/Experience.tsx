import React from "react";
// import "./Experience.css"; // Disabling old CSS to use new global theme

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Data Nimbus",
      title: "Backend Developer",
      period: "Oct 2025 - Present",
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
    <section id="experience" style={{ paddingBottom: '50px' }}>
      <h2 style={{ 
        borderBottom: '2px solid var(--color-primary)', 
        paddingBottom: '10px', 
        marginBottom: '30px',
        textShadow: '0 0 5px var(--color-primary)' 
      }}>
        /SYS/LOGS/EXPERIENCE_DATA
      </h2>
      
      <div style={{ display: 'grid', gap: '40px' }}>
        {experiences.map((exp, index) => (
          <div key={index} style={{
            borderLeft: '2px solid var(--color-primary-dim)',
            paddingLeft: '20px',
            position: 'relative'
          }}>
            {/* Timeline dot */}
            <div style={{
              position: 'absolute',
              left: '-6px',
              top: '0',
              width: '10px',
              height: '10px',
              background: 'var(--color-primary)',
              borderRadius: '50%',
              boxShadow: '0 0 10px var(--color-primary)'
            }} />
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem', color: '#fff' }}>{exp.company}</h3>
              <span style={{ 
                fontFamily: 'var(--font-mono)', 
                fontSize: '0.9rem', 
                background: 'var(--color-primary-dim)', 
                color: '#000', 
                padding: '2px 8px' 
              }}>
                {exp.period}
              </span>
            </div>
            
            <p style={{ 
              color: 'var(--color-primary)', 
              margin: '5px 0 15px 0', 
              fontStyle: 'italic',
              fontFamily: 'var(--font-mono)'
            }}>
              {exp.title}
            </p>
            
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem'
            }}>
              {exp.description.map((desc, idx) => (
                <li key={idx} style={{ 
                  marginBottom: '8px', 
                  display: 'flex', 
                  alignItems: 'start' 
                }}>
                  <span style={{ marginRight: '10px', color: 'var(--color-primary-dim)' }}>{'>'}</span>
                  <span style={{ opacity: 0.9 }}>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
