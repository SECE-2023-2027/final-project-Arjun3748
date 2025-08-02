import { connectDB } from '../../../../lib/db';
import News from '../../../../models/News';

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const data = await req.json();
    
    const updated = await News.findByIdAndUpdate(id, data, { new: true });
    if (!updated) {
      return Response.json({ error: 'News not found' }, { status: 404 });
    }
    
    return Response.json(updated);
  } catch (error) {
    console.error('Error updating news:', error);
    return Response.json({ error: 'Failed to update news' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    const deleted = await News.findByIdAndDelete(id);
    if (!deleted) {
      return Response.json({ error: 'News not found' }, { status: 404 });
    }
    
    return Response.json({ message: 'News deleted successfully' });
  } catch (error) {
    console.error('Error deleting news:', error);
    return Response.json({ error: 'Failed to delete news' }, { status: 500 });
  }
} 