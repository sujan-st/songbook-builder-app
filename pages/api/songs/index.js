// pages/api/song/index.js
import { dbConnect } from '@/lib/dbConnect';
import Song from '@/models/Song';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const song = new Song(req.body);
      await song.save();
      return res.status(201).json(song);
    } catch (err) {
      return res.status(400).json({ message: 'Failed to save song', error: err.message });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}
