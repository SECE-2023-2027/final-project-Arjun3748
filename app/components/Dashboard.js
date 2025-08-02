'use client';

import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editContent, setEditContent] = useState('');
  const [message, setMessage] = useState('');

  // Fetch news from API
  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      if (response.ok) {
        const news = await response.json();
        setItems(news);
      } else {
        setMessage('Failed to fetch news');
      }
    } catch (error) {
      setMessage('Error fetching news');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this news item?')) {
      try {
        const response = await fetch(`/api/news/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setItems(items.filter(item => item._id !== id));
          setMessage('News deleted successfully!');
          setTimeout(() => setMessage(''), 3000);
        } else {
          setMessage('Failed to delete news');
        }
      } catch (error) {
        setMessage('Error deleting news');
      }
    }
  };

  const handleEdit = (item) => {
    setEditingId(item._id);
    setEditTitle(item.title);
    setEditContent(item.content);
  };

  const handleEditSave = async (id) => {
    try {
      const response = await fetch(`/api/news/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: editTitle, content: editContent }),
      });

      if (response.ok) {
        const updatedNews = await response.json();
        setItems(items.map(item => item._id === id ? updatedNews : item));
        setEditingId(null);
        setEditTitle('');
        setEditContent('');
        setMessage('News updated successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Failed to update news');
      }
    } catch (error) {
      setMessage('Error updating news');
    }
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditTitle('');
    setEditContent('');
  };

  if (loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '200px',
        fontSize: '1.1rem',
        color: '#666'
      }}>
        Loading news...
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, color: '#0070f3', fontWeight: 600, fontSize: '1.5rem' }}>
          News/Blog Management ({items.length})
        </h3>
        <a 
          href="/admin/create" 
          style={{ 
            background: '#0070f3', 
            color: '#fff', 
            padding: '0.5rem 1rem', 
            borderRadius: 8, 
            textDecoration: 'none', 
            fontWeight: 600,
            transition: 'background 0.2s'
          }}
          onMouseOver={e => e.target.style.background = '#005bb5'}
          onMouseOut={e => e.target.style.background = '#0070f3'}
        >
          Create New
        </a>
      </div>

      {/* Message */}
      {message && (
        <div style={{ 
          padding: '0.75rem', 
          borderRadius: 8, 
          background: message.includes('successfully') ? '#d4edda' : '#f8d7da', 
          color: message.includes('successfully') ? '#155724' : '#721c24',
          border: `1px solid ${message.includes('successfully') ? '#c3e6cb' : '#f5c6cb'}`
        }}>
          {message}
        </div>
      )}

      {/* News List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {items.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '2rem', 
            color: '#888', 
            background: '#f8f9fa', 
            borderRadius: 12,
            border: '2px dashed #dee2e6'
          }}>
            <p style={{ margin: 0, fontSize: '1.1rem' }}>No news/blogs found.</p>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem' }}>
              <a href="/admin/create" style={{ color: '#0070f3', textDecoration: 'none' }}>
                Click here to create your first news/blog!
              </a>
            </p>
          </div>
        )}
        
        {items.map((item) => (
          <div key={item._id} style={{ 
            background: '#fff', 
            borderRadius: 12, 
            padding: '1.5rem', 
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            border: '1px solid #e9ecef'
          }}>
            {editingId === item._id ? (
              <>
                <input
                  value={editTitle}
                  onChange={e => setEditTitle(e.target.value)}
                  style={{ 
                    padding: '0.75rem', 
                    borderRadius: 8, 
                    border: '1px solid #ccc', 
                    marginBottom: '0.75rem', 
                    width: '100%',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    background: '#fff',
                    color: '#222'
                  }}
                />
                <textarea
                  value={editContent}
                  onChange={e => setEditContent(e.target.value)}
                  rows={4}
                  style={{ 
                    padding: '0.75rem', 
                    borderRadius: 8, 
                    border: '1px solid #ccc', 
                    width: '100%',
                    fontSize: '1rem',
                    marginBottom: '1rem',
                    background: '#fff',
                    color: '#222'
                  }}
                />
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    onClick={() => handleEditSave(item._id)} 
                    style={{ 
                      background: '#28a745', 
                      color: '#fff', 
                      border: 'none', 
                      borderRadius: 8, 
                      padding: '0.5rem 1rem', 
                      fontWeight: 600, 
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={e => e.target.style.background = '#218838'}
                    onMouseOut={e => e.target.style.background = '#28a745'}
                  >
                    Save
                  </button>
                  <button 
                    onClick={handleEditCancel} 
                    style={{ 
                      background: '#6c757d', 
                      color: '#fff', 
                      border: 'none', 
                      borderRadius: 8, 
                      padding: '0.5rem 1rem', 
                      fontWeight: 600, 
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={e => e.target.style.background = '#5a6268'}
                    onMouseOut={e => e.target.style.background = '#6c757d'}
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                  <h4 style={{ margin: 0, color: '#0070f3', fontSize: '1.2rem', fontWeight: 600 }}>{item.title}</h4>
                  <small style={{ color: '#6c757d', fontSize: '0.8rem' }}>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </small>
                </div>
                <p style={{ margin: '0.5rem 0 1rem 0', color: '#222', lineHeight: '1.6' }}>{item.content}</p>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button 
                    onClick={() => handleEdit(item)} 
                    style={{ 
                      background: '#ffc107', 
                      color: '#212529', 
                      border: 'none', 
                      borderRadius: 8, 
                      padding: '0.5rem 1rem', 
                      fontWeight: 600, 
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={e => e.target.style.background = '#e0a800'}
                    onMouseOut={e => e.target.style.background = '#ffc107'}
                  >
                    Edit
                  </button>
                  <button 
                    onClick={() => handleDelete(item._id)} 
                    style={{ 
                      background: '#dc3545', 
                      color: '#fff', 
                      border: 'none', 
                      borderRadius: 8, 
                      padding: '0.5rem 1rem', 
                      fontWeight: 600, 
                      cursor: 'pointer',
                      transition: 'background 0.2s'
                    }}
                    onMouseOver={e => e.target.style.background = '#c82333'}
                    onMouseOut={e => e.target.style.background = '#dc3545'}
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 