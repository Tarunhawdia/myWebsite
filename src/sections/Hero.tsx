import { motion } from "framer-motion";
import pic from "../assets/pic.jpg";
import "./Hero.css";

const ease = [0.22, 1, 0.36, 1] as const;

const name = "Tarun Hawdia";

// floating chess glyphs in the backdrop
const pieces = [
  { char: "♞", top: "18%", left: "8%", size: "5.5rem", delay: 0 },
  { char: "♟", top: "62%", left: "14%", size: "3rem", delay: 0.6 },
  { char: "♜", top: "26%", left: "82%", size: "4rem", delay: 0.3 },
  { char: "♝", top: "70%", left: "78%", size: "4.8rem", delay: 0.9 },
  { char: "♛", top: "12%", left: "55%", size: "2.6rem", delay: 1.2 },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/tarunhawdia" },
  { label: "GitHub", href: "https://github.com/Tarunhawdia" },
  { label: "Email", href: "mailto:tarunhawdia@gmail.com" },
];

const Hero = () => {
  return (
    <section id="home" className="hero">
      {/* floating chess pieces */}
      <div className="hero__pieces" aria-hidden="true">
        {pieces.map((p, i) => (
          <motion.span
            key={i}
            className="hero__piece"
            style={{ top: p.top, left: p.left, fontSize: p.size }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 0.07,
              y: [0, -16, 0],
              rotate: [0, 6, 0],
            }}
            transition={{
              opacity: { duration: 1.4, delay: 0.4 + p.delay },
              y: { duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: p.delay },
              rotate: { duration: 9 + i, repeat: Infinity, ease: "easeInOut", delay: p.delay },
            }}
          >
            {p.char}
          </motion.span>
        ))}
      </div>

      <div className="hero__inner shell">
        <motion.div
          className="hero__photo"
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: -2 }}
          transition={{ duration: 0.9, ease, delay: 0.1 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
        >
          <img src={pic} alt="Tarun Hawdia" />
          <span className="hero__photo-tag">est. IIT Guwahati</span>
        </motion.div>

        <div className="hero__text">
          <motion.p
            className="hero__hello"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.15 }}
          >
            Hi, I&apos;m
          </motion.p>

          <h1 className="hero__name" aria-label={name}>
            {name.split(" ").map((word, w) => {
              const offset = name.split(" ").slice(0, w).join(" ").length + w;
              return (
                <span key={w} className="hero__word" aria-hidden="true">
                  {word.split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      className="hero__letter"
                      initial={{ opacity: 0, y: "0.5em" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease, delay: 0.25 + (offset + i) * 0.04 }}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>
              );
            })}
          </h1>

          <motion.p
            className="hero__role"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
          >
            Software Engineer — I build scalable backends &amp; real-time data
            pipelines. M.Tech, IIT Guwahati. Chess player by night.
          </motion.p>

          <motion.div
            className="hero__socials"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.85 }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-label="Scroll to about"
      >
        <span>Scroll</span>
        <motion.span
          className="hero__scroll-line"
          animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.a>
    </section>
  );
};

export default Hero;
