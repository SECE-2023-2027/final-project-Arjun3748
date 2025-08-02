import Dashboard from '../../components/Dashboard';

export default function AdminDashboardPage() {
  return (
    <div style={{ padding: '2rem', minHeight: '80vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <h2 style={{ marginBottom: '1.5rem', color: '#0070f3', fontWeight: 600 }}>Admin <span style={{ color: '#ff4081' }}>Dashboard</span></h2>
      <div style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: 16, background: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)', padding: 32, width: 600, margin: '0 auto' }}>
        <Dashboard />
      </div>
    </div>
  );
} 