import React from 'react';
import Sidebar from './Sidebar';
import TerminalFooter from './TerminalFooter';

interface LayoutProps {
  children: React.ReactNode;
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, currentSection, onNavigate }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      gridTemplateRows: '1fr 40px',
      height: '100vh',
      width: '100vw',
      overflow: 'hidden',
      backgroundImage: 'radial-gradient(circle at center, #1a1a1a 0%, #000 100%)'
    }}>
      {/* Sidebar Area */}
      <div style={{ gridColumn: '1 / 2', gridRow: '1 / 2', overflow: 'hidden' }}>
        <Sidebar currentSection={currentSection} onNavigate={onNavigate} />
      </div>

      {/* Main Content Area - The "Screen" */}
      <main style={{
        gridColumn: '2 / 3',
        gridRow: '1 / 2',
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* CRT Screen Frame/Bezel Effect inside the viewport */}
        <div style={{
          flex: 1,
          border: '2px solid var(--color-primary-dim)',
          borderRadius: '10px',
          background: 'rgba(0, 0, 0, 0.6)',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)',
          overflowY: 'auto',
          position: 'relative',
          padding: '20px'
        }}>
           {/* Grid Start Decoration */}
           <div style={{
            position: 'absolute',
            top: 10,
            left: 10,
            borderTop: '2px solid var(--color-primary)',
            borderLeft: '2px solid var(--color-primary)',
            width: '20px',
            height: '20px'
          }} />
          <div style={{
            position: 'absolute',
            top: 10,
            right: 10,
            borderTop: '2px solid var(--color-primary)',
            borderRight: '2px solid var(--color-primary)',
            width: '20px',
            height: '20px'
          }} />
          <div style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            borderBottom: '2px solid var(--color-primary)',
            borderLeft: '2px solid var(--color-primary)',
            width: '20px',
            height: '20px'
          }} />
          <div style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            borderBottom: '2px solid var(--color-primary)',
            borderRight: '2px solid var(--color-primary)',
            width: '20px',
            height: '20px'
          }} />

          <div className="content-scroll-area" style={{ height: '100%', overflowY: 'auto' }}>
            {children}
          </div>
        </div>
      </main>

      {/* Footer Area */}
      <div style={{ gridColumn: '1 / 3', gridRow: '2 / 3' }}>
        <TerminalFooter />
      </div>
      
      {/* Global Scanline Overlay for the whole screen */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
        backgroundSize: '100% 2px, 3px 100%',
        pointerEvents: 'none',
        zIndex: 999
      }} />
    </div>
  );
};

export default Layout;
