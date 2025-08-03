import { useState } from 'react';

export default function TestAddSong() {
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/songs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, lyrics, artist }),
    });

    const data = await res.json();
    console.log('Response:', data);
  };

  return (
    <div>
      <h1>Test Add Song</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        /><br />
        <textarea
          placeholder="Lyrics"
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
        /><br />
        <button type="submit">Add Song</button>
      </form>
    </div>
  );
}
