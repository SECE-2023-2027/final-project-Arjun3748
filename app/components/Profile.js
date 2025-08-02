'use client';

import React, { useState } from 'react';

export default function Profile({ role }) {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'Arjun',
    email: 'john.doe@example.com',
    username: 'arjun',
    avatar: '👤',
    bio: 'Passionate news reader and community member. Always staying informed about the latest developments.',
    joinDate: '2024-01-15',
    location: 'New York, USA',
    preferences: {
      notifications: true,
      newsletter: false,
      darkMode: false
    }
  });

  const [editData, setEditData] = useState({ ...userData });

  const stats = [
    { label: 'Articles Read', value: 47, icon: '📰', color: '#0070f3' },
    { label: 'Comments Made', value: 12, icon: '💬', color: '#00c853' },
    { label: 'Likes Given', value: 89, icon: '❤️', color: '#ff4081' },
    { label: 'Days Active', value: 45, icon: '📅', color: '#ff9800' }
  ];

  const recentActivity = [
    { type: 'read', title: 'Breaking: New Technology Breakthrough', time: '2 hours ago', icon: '📰' },
    { type: 'comment', title: 'Great article! Thanks for sharing.', time: '1 day ago', icon: '💬' },
    { type: 'like', title: 'Community Development Project', time: '2 days ago', icon: '❤️' },
    { type: 'read', title: 'Business Trends 2024', time: '3 days ago', icon: '📰' }
  ];

  const handleSave = () => {
    setUserData(editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ ...userData });
    setIsEditing(false);
  };

  const handlePreferenceChange = (key) => {
    setEditData(prev => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [key]: !prev.preferences[key]
      }
    }));
  };

  const tabs = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'activity', label: 'Activity', icon: '📊' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
    { id: 'preferences', label: 'Preferences', icon: '🎨' }
  ];

  return (
    <div style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
      {/* Header */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '2rem',
        padding: '2rem',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: 16,
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{userData.avatar}</div>
        <h1 style={{ 
          color: '#fff', 
          fontSize: '2rem', 
          marginBottom: '0.5rem',
          textShadow: '0 2px 10px rgba(0,0,0,0.3)'
        }}>
          {userData.name}
        </h1>
        <p style={{ 
          color: 'rgba(255,255,255,0.8)', 
          fontSize: '1.1rem',
          marginBottom: '1rem'
        }}>
          @{userData.username}
        </p>
        <p style={{ 
          color: 'rgba(255,255,255,0.9)', 
          fontSize: '1rem',
          lineHeight: 1.6,
          maxWidth: 500,
          margin: '0 auto'
        }}>
          {userData.bio}
        </p>
      </div>

      {/* Stats Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {stats.map((stat, index) => (
          <div key={index} style={{
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 12,
            padding: '1.5rem',
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.2)',
            transition: 'transform 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={e => e.target.style.transform = 'translateY(-5px)'}
          onMouseOut={e => e.target.style.transform = 'translateY(0)'}
          >
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
            <div style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
              {stat.value}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '0.5rem',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id 
                ? 'rgba(255,255,255,0.2)' 
                : 'rgba(255,255,255,0.1)',
              color: '#fff',
              border: 'none',
              borderRadius: 25,
              padding: '0.75rem 1.5rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseOver={e => {
              if (activeTab !== tab.id) {
                e.target.style.background = 'rgba(255,255,255,0.15)';
              }
            }}
            onMouseOut={e => {
              if (activeTab !== tab.id) {
                e.target.style.background = 'rgba(255,255,255,0.1)';
              }
            }}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        borderRadius: 16,
        padding: '2rem',
        border: '1px solid rgba(255,255,255,0.2)',
        minHeight: '400px'
      }}>
        {activeTab === 'profile' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ color: '#fff', fontSize: '1.5rem', margin: 0 }}>Profile Information</h3>
              <button
                onClick={() => setIsEditing(!isEditing)}
                style={{
                  background: isEditing ? '#ff4081' : '#0070f3',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>

            {isEditing ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ color: 'rgba(255,255,255,0.9)', display: 'block', marginBottom: '0.5rem' }}>Name</label>
                  <input
                    type="text"
                    value={editData.name}
                    onChange={(e) => setEditData({...editData, name: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.3)',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: 'rgba(255,255,255,0.9)', display: 'block', marginBottom: '0.5rem' }}>Email</label>
                  <input
                    type="email"
                    value={editData.email}
                    onChange={(e) => setEditData({...editData, email: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.3)',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '1rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ color: 'rgba(255,255,255,0.9)', display: 'block', marginBottom: '0.5rem' }}>Bio</label>
                  <textarea
                    value={editData.bio}
                    onChange={(e) => setEditData({...editData, bio: e.target.value})}
                    rows={3}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      borderRadius: 8,
                      border: '1px solid rgba(255,255,255,0.3)',
                      background: 'rgba(255,255,255,0.1)',
                      color: '#fff',
                      fontSize: '1rem',
                      resize: 'vertical'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <button
                    onClick={handleSave}
                    style={{
                      background: '#00c853',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      padding: '0.75rem 1.5rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      flex: 1
                    }}
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    style={{
                      background: '#666',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 8,
                      padding: '0.75rem 1.5rem',
                      fontSize: '1rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      flex: 1
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Name</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{userData.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Email</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{userData.email}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Username</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>@{userData.username}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Location</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{userData.location}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: 8 }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)' }}>Member Since</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{new Date(userData.joinDate).toLocaleDateString()}</span>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'activity' && (
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {recentActivity.map((activity, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 8,
                  transition: 'background 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={e => e.target.style.background = 'rgba(255,255,255,0.05)'}
                >
                  <div style={{ fontSize: '1.5rem' }}>{activity.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#fff', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {activity.title}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Account Settings</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <button style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 8,
                padding: '1rem',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                textAlign: 'left'
              }}
              onMouseOver={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
              onMouseOut={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                🔐 Change Password
              </button>
              <button style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 8,
                padding: '1rem',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                textAlign: 'left'
              }}
              onMouseOver={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
              onMouseOut={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                📧 Email Preferences
              </button>
              <button style={{
                background: 'rgba(255,255,255,0.1)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 8,
                padding: '1rem',
                fontSize: '1rem',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                textAlign: 'left'
              }}
              onMouseOver={e => e.target.style.background = 'rgba(255,255,255,0.15)'}
              onMouseOut={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                🗑️ Delete Account
              </button>
            </div>
          </div>
        )}

        {activeTab === 'preferences' && (
          <div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Preferences</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {Object.entries(editData.preferences).map(([key, value]) => (
                <div key={key} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: 8
                }}>
                  <span style={{ color: '#fff', fontWeight: 600 }}>
                    {key === 'notifications' && '🔔 Push Notifications'}
                    {key === 'newsletter' && '📧 Newsletter'}
                    {key === 'darkMode' && '🌙 Dark Mode'}
                  </span>
                  <button
                    onClick={() => handlePreferenceChange(key)}
                    style={{
                      background: value ? '#00c853' : '#666',
                      color: '#fff',
                      border: 'none',
                      borderRadius: 20,
                      padding: '0.5rem 1rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'background 0.3s ease'
                    }}
                  >
                    {value ? 'ON' : 'OFF'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 