'use client';
import { useEffect, useState } from 'react';

export default function SingleNews({ params }) {
  const [news, setNews] = useState(null);

  useEffect(() => {
    fetch(`/api/news`)
      .then(res => res.json())
      .then(data => {
        const n = data.find(item => item._id === params.id);
        setNews(n);
      });
  }, [params.id]); // ✅ Fix: added params.id as dependency

  if (!news) return <p style={{ padding: '2rem' }}>Loading...</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{news.title}</h1>
      <p style={{ marginBottom: '1rem' }}>{news.content}</p>
      <small style={{ color: 'gray' }}>
        By {news.author} on {new Date(news.createdAt).toDateString()}
      </small>
    </div>
  );
}
