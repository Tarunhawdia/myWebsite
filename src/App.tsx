import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import AboutMe from "./subHeadings/Aboutme";
import Projects from "./subHeadings/Projects";
import Education from "./subHeadings/Education";
import Experience from "./subHeadings/Experience";
import Footer from "./subHeadings/Footer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="navbar">
          <h1 className="Tarun_Hawdia">Tarun Hawdia</h1>
          <div className="social-links">
            <a
              href="https://github.com/Tarunhawdia"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/tarunhawdia"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://x.com/HawdiaTarun"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Menu button for small screens */}
        <button className="menu-button" onClick={toggleMenu}>
          ☰ MENU
        </button>

        <div className="inside_container">
          <div className={`sidebar ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" onClick={closeMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" onClick={closeMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#Education" onClick={closeMenu}>
                  Education
                </a>
              </li>
            </ul>
          </div>

          <div className="section_main">
            <AboutMe />
            <Experience />
            <Projects />
            <Education />
          </div>
          <button className="go-to-top" onClick={goToTop}>
            ↑ Go to Top
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
