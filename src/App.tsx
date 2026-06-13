import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Interests from "./sections/Interests";
import Footer from "./sections/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Interests />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
