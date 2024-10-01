import "./App.css";
import AboutMe from "./subHeadings/Aboutme"; 
import Projects from "./subHeadings/Projects"; 
import Education from "./subHeadings/Education";

function App() {
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
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/tarunhawdia"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/HawdiaTarun"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="inside-container">
          <div className="sidebar">
            <ul>
              <li>
                <a href="#about">About Me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#Education">Education</a>
              </li>
            </ul>
          </div>
          <div className="section_main">
            <AboutMe/>
            <Projects/>
            <Education/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
