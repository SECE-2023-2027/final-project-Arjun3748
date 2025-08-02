import { connectDB } from '../../../lib/db';
import News from '../../../models/News';

export async function GET() {
  try {
    await connectDB();
    const news = await News.find().sort({ createdAt: -1 });
    return Response.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return Response.json({ error: 'Failed to fetch news' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();
    const created = await News.create(data);
    return Response.json(created);
  } catch (error) {
    console.error('Error creating news:', error);
    return Response.json({ error: 'Failed to create news' }, { status: 500 });
  }
} 