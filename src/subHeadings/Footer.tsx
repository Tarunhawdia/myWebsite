import React from 'react';
import './Footer.css'


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact">
          <h2>Contact Me</h2>
          <p>Email: <a href="mailto:tarunhawdiya112@gmail.com">tarunhawdiya112@gmail.com</a></p>
          <p>Location: Indore, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
