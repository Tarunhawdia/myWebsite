import React, { useEffect, useState } from 'react';

const TerminalFooter: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "SYSTEM STATUS: NORMAL | ALL SYSTEMS GO | WAITING FOR INPUT...";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        i = 0; 
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer style={{
      height: '40px',
      background: '#000',
      borderTop: '2px solid var(--color-primary-dim)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.9rem',
      color: 'var(--color-primary)',
      zIndex: 20
    }}>
      <span style={{ marginRight: '10px' }}>$</span>
      {text}
      <span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </footer>
  );
};

export default TerminalFooter;
