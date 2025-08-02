'use client';

import React, { useState } from 'react';

export default function CreateForm({ onCreate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });

      if (response.ok) {
        const createdNews = await response.json();
        setMessage('News created successfully!');
        setTitle('');
        setContent('');
        if (onCreate) onCreate(createdNews);
      } else {
        const error = await response.json();
        setMessage(error.error || 'Failed to create news');
      }
    } catch (error) {
      setMessage('Error creating news. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: 350 }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          disabled={isSubmitting}
          style={{ padding: '0.75rem', borderRadius: 8, border: '1px solid #ccc', fontSize: 16, background: '#fff', color: '#222' }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={e => setContent(e.target.value)}
          required
          rows={6}
          disabled={isSubmitting}
          style={{ padding: '0.75rem', borderRadius: 8, border: '1px solid #ccc', fontSize: 16, background: '#fff', color: '#222' }}
        />
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            padding: '0.75rem', 
            borderRadius: 8, 
            background: isSubmitting ? '#ccc' : '#0070f3', 
            color: '#fff', 
            fontWeight: 600, 
            fontSize: 16, 
            border: 'none', 
            cursor: isSubmitting ? 'not-allowed' : 'pointer', 
            transition: 'background 0.2s' 
          }}
          onMouseOver={e => !isSubmitting && (e.target.style.background = '#005bb5')}
          onMouseOut={e => !isSubmitting && (e.target.style.background = '#0070f3')}
        >
          {isSubmitting ? 'Creating...' : 'Create'}
        </button>
      </form>
      
      {message && (
        <div style={{ 
          marginTop: '1rem', 
          padding: '0.75rem', 
          borderRadius: 8, 
          background: message.includes('successfully') ? '#d4edda' : '#f8d7da', 
          color: message.includes('successfully') ? '#155724' : '#721c24',
          border: `1px solid ${message.includes('successfully') ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {message}
        </div>
      )}
    </div>
  );
} 