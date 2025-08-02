import LoginForm from '../../components/LoginForm';

export default function UserLoginPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <div style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: 16, background: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)', padding: 32, minWidth: 350 }}>
        <LoginForm role="user" />
      </div>
    </div>
  );
} 