import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { viewport } from "../lib/motion";
import "./Experience.css";

const experiences = [
  {
    company: "DataNimbus",
    title: "Backend Developer",
    period: "Oct 2025 — Present",
    points: [
      "Backend development specializing in Golang.",
      "Built payment orchestration systems to streamline transaction processing.",
      "Developed and managed escrow-related payment technologies.",
    ],
  },
  {
    company: "Emotorad",
    title: "Software Development Engineer",
    period: "Nov 2024 — Sept 2025",
    points: [
      "Converted from intern to full-time after strong performance.",
      "Built an internal analytics dashboard from scratch on the MERN + TypeScript stack for real-time debugging of incoming data streams.",
      "Wrote high-performance RESTful APIs in Golang + PostgreSQL.",
      "Built real-time calorie-analytics pipelines with Apache Flink (Java) driving dynamic rewards for eBike users.",
      "Designed clean, modular microservices and a Redis Sorted-Set live leaderboard.",
      "Integrated AWS infra with Kafka Streams; cut costs via Lambda and S3 lifecycle policies.",
    ],
  },
  {
    company: "ArthmateTech",
    title: "Software Engineer",
    period: "July 2024 — Oct 2024",
    points: [
      "Engineered and optimized backend services with Node.js and MongoDB.",
      "Built responsive, dynamic UIs in React.",
      "Worked across a microservices architecture and implemented REST APIs.",
    ],
  },
  {
    company: "Great India Bathroom Fittings",
    title: "Developer",
    period: "Mar 2021 — Apr 2022",
    points: [
      "Built a Play-Store Android app surfacing live metal prices (zinc, brass, etc.).",
      "Integrated Google AdMob for monetization; React Native + Express.js + MongoDB.",
    ],
  },
  {
    company: "Platfourma",
    title: "Project Trainee & Intern",
    period: "May 2018 — July 2018",
    points: [
      "Assisted on full-stack web applications.",
      "Programmed line-following and obstacle-avoiding robots on Arduino Uno in embedded C.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section exp">
      <div className="shell">
        <Reveal>
          <span className="kicker">02 — Experience</span>
        </Reveal>
        <Reveal>
          <h2 className="section-title">Where I&apos;ve worked</h2>
        </Reveal>

        <div className="exp__timeline">
          {/* the line that draws itself in */}
          <motion.span
            className="exp__line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "0px 0px -25% 0px" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="exp__item"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.05,
              }}
            >
              <motion.span
                className="exp__dot"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewport}
                transition={{
                  duration: 0.4,
                  delay: 0.15 + i * 0.05,
                  ease: "backOut",
                }}
              />
              <div className="exp__head">
                <h3>{exp.company}</h3>
                <span className="exp__period">{exp.period}</span>
              </div>
              <p className="exp__role">{exp.title}</p>
              <ul className="exp__points">
                {exp.points.map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
