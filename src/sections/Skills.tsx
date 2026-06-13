import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { stagger, pop, viewport } from "../lib/motion";
import "./Skills.css";

const groups = [
  {
    label: "Languages",
    items: ["Golang", "Java", "TypeScript", "JavaScript", "Python", "C / C++"],
  },
  {
    label: "Backend & Data",
    items: ["Node.js", "PostgreSQL", "MongoDB", "Redis", "Apache Flink", "Kafka", "gRPC"],
  },
  {
    label: "Cloud & Tooling",
    items: ["AWS Lambda", "S3", "AWS Glue", "Docker", "React", "REST APIs"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section skills">
      <div className="shell">
        <Reveal>
          <span className="kicker">04 — Toolkit</span>
        </Reveal>
        <Reveal>
          <h2 className="section-title">What I work with</h2>
        </Reveal>

        <div className="skills__groups">
          {groups.map((g) => (
            <div className="skills__group" key={g.label}>
              <Reveal>
                <h3 className="skills__group-label">{g.label}</h3>
              </Reveal>
              <motion.ul
                className="skills__chips"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={viewport}
              >
                {g.items.map((item) => (
                  <motion.li
                    key={item}
                    variants={pop}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="skills__chip"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
