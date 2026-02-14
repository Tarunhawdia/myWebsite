import React from 'react';

interface RetroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isActive?: boolean;
}

const RetroButton: React.FC<RetroButtonProps> = ({ children, isActive, className, ...props }) => {
  return (
    <button
      className={`retro-button ${isActive ? 'active' : ''} ${className || ''}`}
      style={{
        background: isActive ? 'var(--color-primary)' : 'var(--color-glass)',
        color: isActive ? 'var(--color-bg)' : 'var(--color-primary)',
        border: '1px solid var(--color-primary)',
        padding: '10px 20px',
        fontFamily: 'var(--font-mono)',
        fontSize: '1rem',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        cursor: 'pointer',
        boxShadow: isActive 
          ? '0 0 10px var(--color-primary), inset 0 0 5px var(--color-primary)' 
          : '0 0 5px var(--color-primary-dim)',
        transition: 'all 0.2s ease',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(4px)',
      }}
      {...props}
    >
      {children}
      {/* Scanline overlay for button */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%)',
        backgroundSize: '100% 4px',
        pointerEvents: 'none',
        opacity: 0.3
      }} />
    </button>
  );
};

export default RetroButton;
