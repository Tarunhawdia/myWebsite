import React from 'react';
import RetroButton from '../UI/RetroButton';

interface SidebarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, onNavigate, isOpen, onClose }) => {
  const sections = [
    { id: 'hero', label: 'HOME.EXE' },
    { id: 'experience', label: 'Experience.DAT' },
    { id: 'projects', label: 'Projects.LIB' },
    { id: 'education', label: 'EDUCATION.DOC' },
    { id: 'skills', label: 'SKILLS.DLL' }
  ];

  const handleNavigate = (id: string) => {
    onNavigate(id);
    if (onClose) onClose();
  };

  return (
    <aside style={{
      width: '250px',
      background: 'rgba(0, 0, 0, 0.95)',
      borderRight: '2px solid var(--color-primary-dim)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      boxShadow: '5px 0 15px rgba(0,0,0,0.5)',
      height: '100%',
      zIndex: 1000,
      position: window.innerWidth <= 768 ? 'fixed' : 'relative',
      left: 0,
      top: 0,
      transition: 'transform 0.3s ease-in-out',
      transform: window.innerWidth <= 768 && !isOpen ? 'translateX(-100%)' : 'translateX(0)',
      pointerEvents: 'auto'
    }}>
      <div style={{ 
        marginBottom: '40px', 
        borderBottom: '1px solid var(--color-primary)',
        paddingBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', margin: 0 }}>SYSTEM_ROOT</h2>
          <small style={{ color: 'var(--color-primary-dim)' }}>// NAVIGATOR v1.1</small>
        </div>
        {window.innerWidth <= 768 && (
          <button 
            onClick={onClose}
            style={{ 
              background: 'none', 
              border: '1px solid var(--color-primary)', 
              color: 'var(--color-primary)',
              cursor: 'pointer',
              padding: '2px 8px'
            }}
          >
            X
          </button>
        )}
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {sections.map(section => (
          <RetroButton
            key={section.id}
            isActive={currentSection === section.id}
            onClick={() => handleNavigate(section.id)}
            style={{ 
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              fontSize: '0.9rem'
            }}
          >
            <span style={{ marginRight: '10px' }}>{'>'}</span> {section.label}
          </RetroButton>
        ))}
      </nav>

      <div style={{ marginTop: 'auto' }}>
        <div style={{ 
          border: '1px solid var(--color-primary-dim)', 
          padding: '10px',
          background: 'rgba(0,0,0,0.5)',
          fontSize: '0.7rem'
        }}>
          <p style={{ margin: 0 }}>PORT: {window.innerWidth}PX</p>
          <p style={{ margin: 0 }}>STATUS: {isOpen ? 'ACTIVE' : 'IDLE'}</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
