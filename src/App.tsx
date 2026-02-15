import { useState } from "react";
import Layout from "./components/Layout/Layout";
import AboutMe from "./subHeadings/Aboutme";
import Projects from "./subHeadings/Projects";
import Education from "./subHeadings/Education";
import Experience from "./subHeadings/Experience";
import Skills from "./subHeadings/Skills";
import pic from "./assets/pic.jpg";

function App() {
  const [activeSection, setActiveSection] = useState('hero'); // Default to Home for first glance visibility

  const renderSection = () => {
    switch (activeSection) {
      case 'hero':
        return (
          <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            {/* Retro Fuzzy Picture */}
            <div className="retro-pic-container">
              <img src={pic} alt="Tarun Hawdia" className="retro-fuzzy-pic" />
              <div className="retro-pic-overlay"></div>
            </div>

            <div style={{ padding: '20px', zIndex: 1 }}>
              <h1>TARUN HAWDIA</h1>
              <h3>SOFTWARE ENGINEER</h3>
              <p>Ready to deploy.</p>
            </div>
            
            <div style={{ marginTop: '40px', borderTop: '1px dashed var(--color-primary-dim)', paddingTop: '20px' }}>
              <h4 style={{ marginBottom: '20px' }}>COMMUNICATION CHANNELS</h4>
              <div style={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
                 <a href="https://linkedin.com/in/tarunhawdia" target="_blank" style={{color: 'var(--color-primary)', fontSize: '1.2rem'}}>[ LINKEDIN ]</a>
                 <a href="https://github.com/Tarunhawdia" target="_blank" style={{color: 'var(--color-primary)', fontSize: '1.2rem'}}>[ GITHUB ]</a>
                 <a href="mailto:tarunhawdia@gmail.com" style={{color: 'var(--color-primary)', fontSize: '1.2rem'}}>[ EMAIL ]</a>
              </div>
            </div>
          </div>
        );
      case 'about':
        return <AboutMe />;
      case 'experience':
        return <Experience />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'education':
        return <Education />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <Layout currentSection={activeSection} onNavigate={setActiveSection}>
      {renderSection()}
    </Layout>
  );
}

export default App;
