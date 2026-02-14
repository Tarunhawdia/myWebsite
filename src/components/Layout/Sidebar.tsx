import React from 'react';
import RetroButton from '../UI/RetroButton';

interface SidebarProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentSection, onNavigate }) => {
  const sections = [
    { id: 'hero', label: 'HOME.EXE' },
    { id: 'experience', label: 'Experience.DAT' },
    { id: 'projects', label: 'Projects.LIB' },
    { id: 'education', label: 'EDUCATION.DOC' },
    { id: 'skills', label: 'SKILLS.DLL' }
  ];

  return (
    <aside style={{
      width: '250px',
      background: 'rgba(0, 0, 0, 0.8)',
      borderRight: '2px solid var(--color-primary-dim)',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      boxShadow: '5px 0 15px rgba(0,0,0,0.5)',
      height: '100%',
      zIndex: 10
    }}>
      <div style={{ 
        marginBottom: '40px', 
        borderBottom: '1px solid var(--color-primary)',
        paddingBottom: '10px'
      }}>
        <h2 style={{ fontSize: '1.5rem', margin: 0 }}>SYSTEM_ROOT</h2>
        <small style={{ color: 'var(--color-primary-dim)' }}>// NAVIGATOR v1.0</small>
      </div>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {sections.map(section => (
          <RetroButton
            key={section.id}
            isActive={currentSection === section.id}
            onClick={() => onNavigate(section.id)}
            style={{ 
              textAlign: 'left',
              display: 'flex',
              alignItems: 'center',
              width: '100%'
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
          fontSize: '0.8rem'
        }}>
          <p style={{ margin: 0 }}>MEM: 64KB OK</p>
          <p style={{ margin: 0 }}>CPU: 8MHZ</p>
          <p style={{ margin: 0 }}>NET: ONLINE</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
