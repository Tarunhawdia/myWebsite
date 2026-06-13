import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { stagger, viewport } from "../lib/motion";
import "./Interests.css";

const ease = [0.22, 1, 0.36, 1] as const;

/* ---------- animated icons ---------- */

// Chess knight that hops in an L, the way it moves on the board
const ChessIcon = () => (
  <motion.span
    className="int__glyph"
    animate={{ x: [0, 0, 14, 14, 0], y: [0, -22, -22, 0, 0] }}
    transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", times: [0, 0.3, 0.5, 0.8, 1] }}
  >
    ♞
  </motion.span>
);

// Stack of book spines that gently shuffle
const BooksIcon = () => (
  <svg viewBox="0 0 64 64" className="int__svg" aria-hidden="true">
    {[0, 1, 2].map((i) => (
      <motion.rect
        key={i}
        x="14"
        y={16 + i * 12}
        width={36 - i * 4}
        height="9"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        animate={{ x: [0, i % 2 ? 4 : -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
      />
    ))}
  </svg>
);

// Four-point "anime sparkle" that twinkles
const AnimeIcon = () => (
  <svg viewBox="0 0 64 64" className="int__svg" aria-hidden="true">
    <motion.path
      d="M32 8 C34 26 38 30 56 32 C38 34 34 38 32 56 C30 38 26 34 8 32 C26 30 30 26 32 8 Z"
      fill="currentColor"
      animate={{ rotate: [0, 360], scale: [1, 1.12, 1] }}
      transition={{ rotate: { duration: 12, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
      style={{ transformOrigin: "32px 32px" }}
    />
  </svg>
);

// Spinning film reel
const MovieIcon = () => (
  <motion.svg
    viewBox="0 0 64 64"
    className="int__svg"
    aria-hidden="true"
    animate={{ rotate: 360 }}
    transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="32" cy="32" r="22" fill="none" stroke="currentColor" strokeWidth="2.5" />
    <circle cx="32" cy="32" r="5" fill="currentColor" />
    {[0, 60, 120, 180, 240, 300].map((deg) => (
      <circle
        key={deg}
        cx={32 + 14 * Math.cos((deg * Math.PI) / 180)}
        cy={32 + 14 * Math.sin((deg * Math.PI) / 180)}
        r="3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
    ))}
  </motion.svg>
);

const cards = [
  {
    icon: <ChessIcon />,
    title: "Chess",
    text: "The one game where I'll happily lose track of an evening. Tactics over openings — I'd rather find the combination than memorize the line.",
    tags: ["Blitz", "Tactics", "Endgames"],
  },
  {
    icon: <BooksIcon />,
    title: "Books",
    text: "A steady rotation of sci-fi and non-fiction. Half the side-projects I start are just ideas I stole from a good chapter.",
    tags: ["Sci-fi", "Non-fiction", "Tech"],
  },
  {
    icon: <AnimeIcon />,
    title: "Anime",
    text: "From long-running shounen to quiet Ghibli afternoons. Great stories, even better soundtracks.",
    tags: ["Shounen", "Ghibli", "Seinen"],
  },
  {
    icon: <MovieIcon />,
    title: "Movies",
    text: "Sci-fi, thrillers, and anything with a twist I didn't see coming. The kind that's better on a second watch.",
    tags: ["Sci-fi", "Thriller", "Mystery"],
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const Interests = () => {
  return (
    <section id="interests" className="section int">
      <div className="shell">
        <Reveal>
          <span className="kicker">06 — Off the Clock</span>
        </Reveal>
        <Reveal>
          <h2 className="section-title">When I&apos;m not shipping code</h2>
        </Reveal>

        <motion.div
          className="int__grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
        >
          {cards.map((c) => (
            <motion.article
              key={c.title}
              className="int__card card"
              variants={cardVariant}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <div className="int__icon">{c.icon}</div>
              <h3 className="int__title">{c.title}</h3>
              <p className="int__text">{c.text}</p>
              <div className="int__tags">
                {c.tags.map((t) => (
                  <span key={t} className="int__tag">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
