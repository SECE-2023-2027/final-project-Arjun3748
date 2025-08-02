'use client';

import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  const navStyle = {
    width: '100%',
    background: 'rgba(0,0,0,0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    padding: '0',
    margin: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 60,
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    borderBottom: '1px solid rgba(255,255,255,0.1)'
  };

  const logoStyle = {
    color: '#fff',
    fontWeight: 800,
    fontSize: '1.5rem',
    textDecoration: 'none',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  const listStyle = {
    display: 'flex',
    gap: '0.5rem',
    padding: '0 2rem',
    alignItems: 'center',
    height: '100%',
    margin: 0,
    listStyle: 'none'
  };

  const linkStyle = {
    color: 'rgba(255,255,255,0.9)',
    fontWeight: 600,
    fontSize: '0.95rem',
    textDecoration: 'none',
    padding: '0.75rem 1rem',
    borderRadius: 8,
    transition: 'all 0.3s ease',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const linkHoverStyle = {
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    transform: 'translateY(-1px)'
  };

  const [hovered, setHovered] = React.useState(-1);
  
  const links = [
    { href: '/', label: '🏠 Home', icon: '🏠' },
    { href: '/admin/login', label: '🔐 Admin', icon: '🔐' },
    { href: '/admin/create', label: '✏️ Create', icon: '✏️' },
    { href: '/user/userLogin', label: '👤 User', icon: '👤' },
    { href: '/user/terms&Conditions', label: '📋 Terms', icon: '📋' },
  ];

  return (
    <nav style={navStyle}>
      <Link href="/" style={logoStyle}>
        <span style={{ fontSize: '1.8rem' }}>📰</span>
        <span>News Hub</span>
      </Link>
      
      <div style={listStyle}>
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={hovered === i ? { ...linkStyle, ...linkHoverStyle } : linkStyle}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(-1)}
          >
            <span style={{ fontSize: '1.1rem' }}>{link.icon}</span>
            <span>{link.label.replace(/^[^\s]*\s/, '')}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
