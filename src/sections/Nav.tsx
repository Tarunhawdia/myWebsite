import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";
import "./Nav.css";

const LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Off the Clock" },
];

const Nav = () => {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...LINKS.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className={`nav ${scrolled ? "nav--scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
    >
      <div className="nav__inner shell">
        <a href="#home" className="nav__brand" aria-label="Home">
          <span className="nav__knight">♞</span>
          <span className="nav__name">Tarun Hawdia</span>
        </a>

        <nav className="nav__links">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? "is-active" : ""}`}
            >
              {l.label}
              {active === l.id && (
                <motion.span layoutId="nav-underline" className="nav__underline" />
              )}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>

      <motion.div className="nav__progress" style={{ scaleX: progress }} />
    </motion.header>
  );
};

export default Nav;
