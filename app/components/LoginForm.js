'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm({ role }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic (API call)
    setLoggedIn(true);
    if (role === 'admin') {
      router.push('/admin/dashboard');
    } else {
      router.push('/user/userProfile');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: 300 }}>
      <h3 style={{ textAlign: 'center', color: '#0070f3', fontWeight: 700, marginBottom: 8 }}>{role === 'admin' ? 'Admin' : 'User'} Login</h3>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
        required
        style={{ padding: '0.75rem', borderRadius: 8, border: '1px solid #ccc', fontSize: 16 }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
        style={{ padding: '0.75rem', borderRadius: 8, border: '1px solid #ccc', fontSize: 16 }}
      />
      <button type="submit" style={{ padding: '0.75rem', borderRadius: 8, background: '#0070f3', color: '#fff', fontWeight: 600, fontSize: 16, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
        onMouseOver={e => e.target.style.background = '#005bb5'}
        onMouseOut={e => e.target.style.background = '#0070f3'}
      >
        Login
      </button>
      {loggedIn && role === 'admin' && (
        <button type="button" onClick={() => router.push('/admin/profile')} style={{ padding: '0.75rem', borderRadius: 8, background: '#ff4081', color: '#fff', fontWeight: 600, fontSize: 16, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}>
          Go to Admin Profile
        </button>
      )}
      {loggedIn && role === 'user' && (
        <button type="button" onClick={() => router.push('/user/userProfile')} style={{ padding: '0.75rem', borderRadius: 8, background: '#ff4081', color: '#fff', fontWeight: 600, fontSize: 16, border: 'none', cursor: 'pointer', transition: 'background 0.2s' }}>
          Go to User Profile
        </button>
      )}
    </form>
  );
} 