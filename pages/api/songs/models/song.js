// pages/api/songs.js
import connectToDatabase from '../../lib/mongodb';
import Song from '../../models/Song';

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    const { title, lyrics } = req.body;

    if (!title || !lyrics) {
      return res.status(400).json({ message: 'Missing title or lyrics' });
    }

    try {
      const newSong = new Song({ title, lyrics });
      await newSong.save();
      return res.status(201).json({ message: 'Song saved!' });
    } catch (error) {
      console.error('Save error:', error);
      return res.status(500).json({ message: 'Failed to save song' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
