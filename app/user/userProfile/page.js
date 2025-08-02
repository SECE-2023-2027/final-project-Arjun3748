import Profile from '../../components/Profile';

export default function UserProfilePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem 0'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        <h2 style={{ 
          textAlign: 'center',
          marginBottom: '2rem', 
          color: '#fff', 
          fontWeight: 700, 
          fontSize: '2.5rem',
          textShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}>
          User <span style={{ 
            background: 'linear-gradient(45deg, #ff6b6b, #ff4081)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>Profile</span>
        </h2>
        <Profile role="user" />
      </div>
    </div>
  );
} 