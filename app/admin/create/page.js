'use client';

import { useRouter } from 'next/navigation';
import CreateForm from '../../components/CreateForm';

export default function AdminCreatePage() {
  const router = useRouter();

  const handleCreateSuccess = (createdNews) => {
    // Redirect to dashboard after successful creation
    setTimeout(() => {
      router.push('/admin/dashboard');
    }, 1500);
  };

  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#0070f3', fontWeight: 600 }}>Create <span style={{ color: '#ff4081' }}>News/Blog</span></h2>
      <div style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: 16, background: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)', padding: 32, width: 500 }}>
        <CreateForm onCreate={handleCreateSuccess} />
      </div>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <a 
          href="/admin/dashboard" 
          style={{ 
            color: '#0070f3', 
            textDecoration: 'none', 
            fontSize: '0.9rem',
            padding: '0.5rem 1rem',
            border: '1px solid #0070f3',
            borderRadius: 8,
            transition: 'all 0.2s'
          }}
          onMouseOver={e => {
            e.target.style.background = '#0070f3';
            e.target.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.target.style.background = 'transparent';
            e.target.style.color = '#0070f3';
          }}
        >
          ← Back to Dashboard
        </a>
      </div>
    </div>
  );
} 