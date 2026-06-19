import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import "./Footer.css";

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/tarunhawdia" },
  { label: "GitHub", href: "https://github.com/Tarunhawdia" },
  { label: "Email", href: "mailto:tarunhawdia@gmail.com" },
];

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="shell">
        <Reveal>
          <span className="kicker">07 — Say hello</span>
        </Reveal>

        <Reveal>
          <h2 className="footer__cta">
            Got an idea, a role, or just
            <br />
            want to play a game of chess?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.a
            href="mailto:tarunhawdiya112@gmail.com"
            className="footer__mail"
            whileHover={{ x: 6 }}
          >
            tarunhawdiya112@gmail.com <span aria-hidden="true">→</span>
          </motion.a>
        </Reveal>

        <div className="footer__bottom">
          <span className="footer__sig">
            <span className="footer__knight">♞</span> Built by Tarun Hawdia ·{" "}
            {new Date().getFullYear()}
          </span>
          <div className="footer__links">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
