'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import NewsCard from './components/NewsCard';

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    fetch('/api/news')
      .then(res => res.json())
      .then(data => {
        setNews(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const categories = [
    { id: 'all', name: 'All News', icon: '📰', color: '#0070f3' },
    { id: 'breaking', name: 'Breaking', icon: '🚨', color: '#ff4081' },
    { id: 'technology', name: 'Technology', icon: '💻', color: '#00c853' },
    { id: 'business', name: 'Business', icon: '💼', color: '#ff9800' },
    { id: 'lifestyle', icon: '🌟', name: 'Lifestyle', color: '#9c27b0' }
  ];

  const filteredNews = news.filter(item =>
    activeCategory === 'all' || item.category === activeCategory
  );

  const stats = [
    { label: 'Total Articles', value: news.length, icon: '📊' },
    { label: 'This Week', value: Math.floor(news.length * 0.3), icon: '📅' },
    { label: 'Categories', value: categories.length - 1, icon: '🏷️' },
    { label: 'Readers', value: Math.floor(news.length * 150), icon: '👥' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '2rem 0'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{
              color: '#fff',
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              marginBottom: '1rem',
              letterSpacing: 2,
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
              background: 'linear-gradient(45deg, #fff, #f0f0f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Community <span style={{
                background: 'linear-gradient(45deg, #ff6b6b, #ff4081)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>News</span> Hub
            </h1>
            <p style={{
              color: 'rgba(255,255,255,0.9)',
              fontSize: '1.3rem',
              maxWidth: 800,
              margin: '0 auto 3rem',
              lineHeight: 1.6,
              textShadow: '0 2px 10px rgba(0,0,0,0.2)'
            }}>
              Your premier destination for breaking news, insightful stories, and community updates.
              Stay informed, stay connected, and be part of the conversation that shapes our world.
            </p>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: 16,
                padding: '1.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div style={{ color: '#fff', fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ padding: '2rem 0', background: 'rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{
            textAlign: 'center',
            color: '#fff',
            fontSize: '2rem',
            marginBottom: '2rem',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Explore Categories
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  background: activeCategory === category.id ? category.color : 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 25,
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Section */}
      <div style={{ padding: '2rem 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#fff', fontSize: '1.2rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏳</div>
              Loading latest news...
            </div>
          ) : filteredNews.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: '#fff' }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📰</div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>No news available yet</h3>
              <p style={{ opacity: 0.8 }}>Check back soon for the latest updates!</p>
            </div>
          ) : (
            <>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '2rem',
                color: '#fff'
              }}>
                <h2 style={{ fontSize: '1.8rem', margin: 0 }}>
                  {activeCategory === 'all'
                    ? 'Latest News'
                    : `${categories.find(c => c.id === activeCategory)?.name} News`}
                </h2>
                <span style={{ opacity: 0.8 }}>
                  {filteredNews.length} article{filteredNews.length !== 1 ? 's' : ''}
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem'
              }}>
                {filteredNews.map((n, index) => (
                  <div key={n._id} style={{
                    animation: `fadeInUp 0.6s ease ${index * 0.1}s both`
                  }}>
                    <NewsCard news={n} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        background: 'rgba(0,0,0,0.3)',
        padding: '3rem 0 2rem 0',
        marginTop: '4rem'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>About Us</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                We&rsquo;re committed to bringing you the most relevant and timely news from your community and beyond.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Quick Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <Link href="/admin/login" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Admin Login</Link>
                <Link href="/user/userLogin" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>User Login</Link>
                <Link href="/user/terms&Conditions" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}>Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Connect With Us</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>📱</div>
                <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>📧</div>
                <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>📘</div>
                <div style={{ fontSize: '1.5rem', cursor: 'pointer' }}>🐦</div>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '2rem',
            color: 'rgba(255,255,255,0.6)'
          }}>
            © 2024 Community News Hub. All rights reserved. | Built with ❤️ for the community
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
