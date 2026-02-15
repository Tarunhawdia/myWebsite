import React from "react";
import "./Skills.css";

const skills = [
  {
    name: "TypeScript",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text x="24" y="32" textAnchor="middle" fontSize="22" fill="currentColor" fontWeight="bold">TS</text>
      </svg>
    ),
  },
  {
    name: "React",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
        <ellipse cx="24" cy="24" rx="16" ry="6" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="24" cy="24" rx="6" ry="16" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="6" ry="16" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 24 24)"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <polygon points="24,4 44,14 44,34 24,44 4,34 4,14" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="24" y="32" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">NODE</text>
      </svg>
    ),
  },
  {
    name: "Golang",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect width="40" height="30" x="4" y="9" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text x="24" y="30" textAnchor="middle" fontSize="20" fill="currentColor" fontWeight="bold">GO</text>
      </svg>
    ),
  },
  {
    name: "Java",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <path d="M10,35 Q24,45 38,35 M15,30 Q24,35 33,30 M20,10 Q25,20 20,30 M28,10 Q33,20 28,30" fill="none" stroke="currentColor" strokeWidth="2"/>
        <text x="24" y="44" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">JAVA</text>
      </svg>
    ),
  },
  {
    name: "Kafka",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
        <path d="M14,24 L34,24 M24,14 L24,34" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="24" y="44" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">KAFKA</text>
      </svg>
    ),
  },
  {
    name: "Flink",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <path d="M8,40 L24,8 L40,40 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="28" r="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="24" y="44" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">FLINK</text>
      </svg>
    ),
  },
  {
    name: "gRPC",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect width="36" height="36" x="6" y="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="24" y="30" textAnchor="middle" fontSize="14" fill="currentColor" fontWeight="bold">gRPC</text>
        <path d="M6,24 L42,24 M24,6 L24,42" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <path d="M12,12 H36 V36 H12 Z M12,24 H36 M24,12 V36" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="24" y="44" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">PGSQL</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <path d="M24,4 Q34,14 24,44 Q14,14 24,4" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="24" y="44" textAnchor="middle" fontSize="10" fill="currentColor" fontWeight="bold">MONGO</text>
      </svg>
    ),
  },
  {
    name: "AWS",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <path d="M6,35 L12,15 L24,35 L36,15 L42,35" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="24" y="44" textAnchor="middle" fontSize="12" fill="currentColor" fontWeight="bold">AWS</text>
      </svg>
    ),
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="section">
    <h1 className="sub_headings">Technical_Skills</h1>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-card" key={skill.name}>
          <div className="skill-card-inner">
            <div className="skill-logo">{skill.logo}</div>
            <span className="skill-name">{skill.name}</span>
            <div className="skill-card-scanline"></div>
          </div>
          <div className="skill-card-border"></div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;