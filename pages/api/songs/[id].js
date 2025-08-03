import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function SongPage() {
  const router = useRouter();
  const { id } = router.query;
  const [song, setSong] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchSong = async () => {
      try {
        const res = await fetch(`/api/song/${id}`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setSong(data);
      } catch (err) {
        console.error('Error loading song:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSong();
  }, [id]);

  if (loading) return <div className="text-center text-gray-400 mt-20">Loading song...</div>;
  if (!song) return <div className="text-center text-red-500 mt-20">Song not found.</div>;

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-3xl font-bold mb-4">{song.title}</h1>
      <pre className="whitespace-pre-wrap">{song.lyrics}</pre>
    </div>
  );
}
