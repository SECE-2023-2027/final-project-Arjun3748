'use client';
import { useState, useEffect } from 'react';

export default function AdminPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [news, setNews] = useState([]);

  const fetchNews = () => {
    fetch('/api/news').then(res => res.json()).then(setNews);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const addNews = async () => {
    await fetch('/api/news', {
      method: 'POST',
      body: JSON.stringify({ title, content, author }),
    });
    setTitle(''); setContent(''); setAuthor('');
    fetchNews();
  };

  const deleteNews = async (id) => {
    await fetch(`/api/news/${id}`, { method: 'DELETE' });
    fetchNews();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Admin Dashboard</h1>

      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} /><br />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} /><br />
      <textarea placeholder="Content" value={content} onChange={e => setContent(e.target.value)} /><br />
      <button onClick={addNews}>Post News</button>

      <h2>All News</h2>
      {news.map(n => (
        <div key={n._id}>
          <h3>{n.title}</h3>
          <button onClick={() => deleteNews(n._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
