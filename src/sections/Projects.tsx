import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { stagger, viewport } from "../lib/motion";
import logoChess from "../assets/chess.png";
import logoChat from "../assets/chatapp.png";
import logoThesis from "../assets/deeplearning.jpeg";
import logoHttp from "../assets/httpserver.png";
import logoHeart from "../assets/heartprediction.png";
import logoPaddle from "../assets/paddle.png";
import logoNotification from "../assets/notification.svg";
import "./Projects.css";

const projects = [
  {
    title: "Chess WebApp",
    tag: "TypeScript · React",
    description:
      "A fully playable chess game built around clean OOP design — real-time move validation and a responsive modern UI.",
    href: "https://my-chess-app-one.vercel.app/",
    repo: "https://github.com/Tarunhawdia/myChessApp",
    logo: logoChess,
  },
  {
    title: "Notification Manager",
    tag: "React Native · Kotlin · Android",
    description:
      "A privacy-focused Android app that auto-suppresses notifications from apps you haven't used recently, keeping your status bar clean.",
    href: "https://github.com/Tarunhawdia/notification-manager",
    repo: "https://github.com/Tarunhawdia/notification-manager",
    logo: logoNotification,
  },
  {
    title: "Real-time Chat App",
    tag: "Node · Socket.io · MongoDB",
    description:
      "Full-stack realtime chat with secure auth and persistent messaging over websockets.",
    href: "https://chat-app-b8ra.onrender.com/chats",
    repo: "https://github.com/Tarunhawdia/Chat-app",
    logo: logoChat,
  },
  {
    title: "Respiratory Rate — RR-WaveNet",
    tag: "Master's Thesis · Deep Learning",
    description:
      "IIT Guwahati thesis: a deep-learning model predicting respiratory rate from raw PPG sensor signals.",
    href: "",
    repo: "",
    logo: logoThesis,
  },
  {
    title: "HTTP Server in C",
    tag: "C · Sockets",
    description:
      "A from-scratch HTTP server handling concurrent connections — a deep dive into networking fundamentals.",
    href: "https://github.com/Tarunhawdia/HTTPserverinC",
    repo: "https://github.com/Tarunhawdia/HTTPserverinC",
    logo: logoHttp,
  },
  {
    title: "Heart Disease Prediction",
    tag: "Python · scikit-learn",
    description:
      "ML classifiers predicting heart-disease likelihood from clinical parameters with high accuracy.",
    href: "https://github.com/Tarunhawdia/Heart-disease-predication",
    repo: "https://github.com/Tarunhawdia/Heart-disease-predication",
    logo: logoHeart,
  },
  {
    title: "SFML Paddle Game",
    tag: "C++ · SFML",
    description:
      "A retro arcade paddle game with smooth physics and classic game mechanics.",
    href: "https://github.com/Tarunhawdia/SFML-Paddle-Game",
    repo: "https://github.com/Tarunhawdia/SFML-Paddle-Game",
    logo: logoPaddle,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const Projects = () => {
  return (
    <section id="projects" className="section work">
      <div className="shell">
        <Reveal>
          <span className="kicker">03 — Selected Work</span>
        </Reveal>
        <Reveal>
          <h2 className="section-title">Things I&apos;ve built</h2>
        </Reveal>

        <motion.div
          className="work__grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {projects.map((p) => {
            const url = p.href || p.repo;
            const Wrapper = url ? motion.a : motion.div;
            return (
              <Wrapper
                key={p.title}
                {...(url ? { href: url, target: "_blank", rel: "noopener noreferrer" } : {})}
                className="work__card card"
                variants={cardVariant}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <div className="work__logo">
                  <img src={p.logo} alt="" loading="lazy" />
                </div>
                <div className="work__body">
                  <span className="work__tag">{p.tag}</span>
                  <h3 className="work__title">{p.title}</h3>
                  <p className="work__desc">{p.description}</p>
                  {url && <span className="work__cta">View →</span>}
                </div>
              </Wrapper>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
