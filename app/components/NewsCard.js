'use client';

import React, { useState } from 'react';

export default function NewsCard({ id, news }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Support both id and news prop for flexibility
  const title = news?.title || `News/Blog Title (ID: ${id})`;
  const content = news?.content || 'News/Blog content goes here...';
  const createdAt = news?.createdAt ? new Date(news.createdAt) : new Date();
  
  // Generate a random category for demo purposes
  const categories = ['Breaking', 'Technology', 'Business', 'Lifestyle', 'Community'];
  const category = news?.category || categories[Math.floor(Math.random() * categories.length)];
  const categoryColors = {
    'Breaking': '#ff4081',
    'Technology': '#00c853',
    'Business': '#ff9800',
    'Lifestyle': '#9c27b0',
    'Community': '#0070f3'
  };

  const formatDate = (date) => {
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Today';
    if (diffDays === 2) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays - 1} days ago`;
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined
    });
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div 
      style={{
        background: 'rgba(255,255,255,0.95)',
        borderRadius: 20,
        padding: '2rem',
        boxShadow: isHovered 
          ? '0 20px 40px rgba(0,0,0,0.15), 0 8px 16px rgba(0,0,0,0.1)' 
          : '0 8px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.05)',
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.2)',
        backdropFilter: 'blur(10px)',
        transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Badge */}
      <div style={{
        position: 'absolute',
        top: '1.5rem',
        right: '1.5rem',
        background: categoryColors[category] || '#0070f3',
        color: '#fff',
        padding: '0.4rem 1rem',
        borderRadius: 20,
        fontSize: '0.8rem',
        fontWeight: 600,
        letterSpacing: 0.5,
        textTransform: 'uppercase',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.3s ease'
      }}>
        {category}
      </div>

      {/* Decorative Background Element */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        width: '200%',
        height: '200%',
        background: `linear-gradient(45deg, ${categoryColors[category] || '#0070f3'}10, transparent)`,
        borderRadius: '50%',
        transform: isHovered ? 'scale(1.2) rotate(45deg)' : 'scale(1) rotate(0deg)',
        transition: 'all 0.6s ease',
        zIndex: 0
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Date */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1rem',
          color: '#666',
          fontSize: '0.9rem'
        }}>
          <span style={{ fontSize: '1.1rem' }}>📅</span>
          {formatDate(createdAt)}
          <span style={{ 
            width: '4px', 
            height: '4px', 
            background: '#ccc', 
            borderRadius: '50%' 
          }} />
          <span>5 min read</span>
        </div>

        {/* Title */}
        <h3 style={{
          color: '#1a1a1a',
          fontWeight: 700,
          fontSize: '1.5rem',
          marginBottom: '1rem',
          lineHeight: 1.3,
          transition: 'color 0.3s ease'
        }}>
          {title}
        </h3>

        {/* Content */}
        <p style={{
          color: '#555',
          fontSize: '1rem',
          lineHeight: 1.6,
          marginBottom: '1.5rem',
          transition: 'color 0.3s ease'
        }}>
          {truncateText(content)}
        </p>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto'
        }}>
          <button style={{
            background: 'linear-gradient(45deg, #0070f3, #005bb5)',
            color: '#fff',
            border: 'none',
            borderRadius: 25,
            padding: '0.75rem 1.5rem',
            fontSize: '0.9rem',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(0,112,243,0.3)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
          onMouseOver={e => {
            e.target.style.background = 'linear-gradient(45deg, #005bb5, #004494)';
            e.target.style.boxShadow = '0 6px 20px rgba(0,112,243,0.4)';
          }}
          onMouseOut={e => {
            e.target.style.background = 'linear-gradient(45deg, #0070f3, #005bb5)';
            e.target.style.boxShadow = '0 4px 12px rgba(0,112,243,0.3)';
          }}
          >
            Read More →
          </button>

          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <button style={{
              background: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: 20,
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: '#666'
            }}
            onMouseOver={e => {
              e.target.style.background = '#f5f5f5';
              e.target.style.color = '#0070f3';
              e.target.style.borderColor = '#0070f3';
            }}
            onMouseOut={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#666';
              e.target.style.borderColor = '#e0e0e0';
            }}
            >
              💬
            </button>
            <button style={{
              background: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: 20,
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: '#666'
            }}
            onMouseOver={e => {
              e.target.style.background = '#f5f5f5';
              e.target.style.color = '#ff4081';
              e.target.style.borderColor = '#ff4081';
            }}
            onMouseOut={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#666';
              e.target.style.borderColor = '#e0e0e0';
            }}
            >
              ❤️
            </button>
            <button style={{
              background: 'transparent',
              border: '1px solid #e0e0e0',
              borderRadius: 20,
              padding: '0.5rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              color: '#666'
            }}
            onMouseOver={e => {
              e.target.style.background = '#f5f5f5';
              e.target.style.color = '#00c853';
              e.target.style.borderColor = '#00c853';
            }}
            onMouseOut={e => {
              e.target.style.background = 'transparent';
              e.target.style.color = '#666';
              e.target.style.borderColor = '#e0e0e0';
            }}
            >
              📤
            </button>
          </div>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      {isHovered && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(0,112,243,0.05), rgba(255,64,129,0.05))',
          borderRadius: 20,
          pointerEvents: 'none'
        }} />
      )}
    </div>
  );
}
