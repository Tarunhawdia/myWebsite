import React from "react";
import "./Skills.css";

const skills = [
  {
    name: "TypeScript",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#3178C6"/>
        <text x="24" y="32" textAnchor="middle" fontSize="22" fill="#fff" fontWeight="bold">TS</text>
      </svg>
    ),
  },
  {
    name: "React",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" fill="#222" />
        <ellipse cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#61DAFB" strokeWidth="3"/>
        <ellipse cx="24" cy="24" rx="6" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(60 24 24)"/>
        <ellipse cx="24" cy="24" rx="6" ry="16" fill="none" stroke="#61DAFB" strokeWidth="3" transform="rotate(120 24 24)"/>
        <circle cx="24" cy="24" r="3.5" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    name: "Node.js",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="22" fill="#222" />
        <text x="24" y="32" textAnchor="middle" fontSize="18" fill="#8CC84B" fontWeight="bold">Node</text>
      </svg>
    ),
  },
  {
    name: "Java",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#fff"/>
        <text x="24" y="32" textAnchor="middle" fontSize="18" fill="#007396" fontWeight="bold">Java</text>
      </svg>
    ),
  },
  {
    name: "Golang",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#00ADD8"/>
        <text x="24" y="32" textAnchor="middle" fontSize="18" fill="#fff" fontWeight="bold">Go</text>
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#336791"/>
        <text x="24" y="32" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">PGSQL</text>
      </svg>
    ),
  },
  {
    name: "MongoDB",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#13AA52"/>
        <text x="24" y="32" textAnchor="middle" fontSize="16" fill="#fff" fontWeight="bold">Mongo</text>
      </svg>
    ),
  },
  {
    name: "AWS",
    logo: (
      <svg width="48" height="48" viewBox="0 0 48 48">
        <rect width="48" height="48" rx="8" fill="#232F3E"/>
        <text x="24" y="32" textAnchor="middle" fontSize="18" fill="#FF9900" fontWeight="bold">AWS</text>
      </svg>
    ),
  },
  // Add more skills as needed
];

const Skills: React.FC = () => (
  <section id="skills" className="section">
    <h1 className="sub_headings">Skills</h1>
    <div className="skills-grid">
      {skills.map((skill) => (
        <div className="skill-card" key={skill.name}>
          <div className="skill-logo">{skill.logo}</div>
          <span className="skill-name">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;