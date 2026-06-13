import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { stagger, pop, viewport } from "../lib/motion";
import "./About.css";

const stats = [
  { value: "2+", label: "Years building" },
  { value: "500+", label: "DSA solved" },
  { value: "Gold", label: "IITG medalist" },
];

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="shell">
        <Reveal>
          <span className="kicker">01 — About</span>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__lead">
            <p>
              I&apos;m <strong>Tarun Hawdia</strong>, a software developer who
              likes problems that live close to the metal — backend systems,
              real-time pipelines, and the messy details of making things fast.
            </p>
          </Reveal>

          <div className="about__body">
            <Reveal delay={0.05}>
              <p>
                My background is a bit of a mix: an M.Tech in Biomedical Science
                from <strong>IIT Guwahati</strong> and a B.Tech in Electrical
                Engineering, which left me equally comfortable with{" "}
                <strong>Golang, Java, Node.js</strong> and the occasional
                embedded-systems detour.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                These days I build high-performance RESTful APIs, real-time data
                pipelines with Apache Flink and Kafka, and microservices that
                stay clean as they scale. I care about good architecture, and
                I&apos;ve solved <strong>500+ DSA problems</strong> mostly
                because I find them genuinely fun.
              </p>
            </Reveal>
          </div>
        </div>

        <motion.ul
          className="about__stats"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {stats.map((s) => (
            <motion.li key={s.label} variants={pop} className="about__stat">
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default About;
