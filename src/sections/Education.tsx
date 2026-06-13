import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { stagger, viewport } from "../lib/motion";
import iitg from "../assets/iitg.png";
import uecu from "../assets/uecu.png";
import "./Education.css";

const schools = [
  {
    logo: iitg,
    name: "Indian Institute of Technology, Guwahati",
    degree: "M.Tech — Biomedical Science & Technology",
    score: "8.8 / 10 CGPA · Gold Medalist",
    href: "https://www.iitg.ac.in",
  },
  {
    logo: uecu,
    name: "Ujjain Engineering College, Ujjain",
    degree: "B.Tech — Electrical Engineering",
    score: "6.77 / 10 CGPA",
    href: "https://www.uecu.ac.in",
  },
];

const row = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const Education = () => {
  return (
    <section id="education" className="section edu">
      <div className="shell">
        <Reveal>
          <span className="kicker">05 — Education</span>
        </Reveal>

        <motion.div
          className="edu__list"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {schools.map((s) => (
            <motion.a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="edu__row"
              variants={row}
              whileHover={{ x: 6 }}
            >
              <div className="edu__logo">
                <img src={s.logo} alt="" loading="lazy" />
              </div>
              <div className="edu__info">
                <h3 className="edu__name">{s.name}</h3>
                <p className="edu__degree">{s.degree}</p>
                <span className="edu__score">{s.score}</span>
              </div>
              <span className="edu__arrow">↗</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
