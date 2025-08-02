import NewsCard from '../../components/NewsCard';

export default function UserNewsPage({ params }) {
  const { id } = params;
  // Fetch news/blog by id here (API call or props)
  return (
    <div style={{ padding: '2rem', minHeight: '80vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)', borderRadius: 16, background: 'linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)', padding: 32, width: 600 }}>
        <NewsCard id={id} />
      </div>
    </div>
  );
} 