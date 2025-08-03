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
  console.log('Response:', data); // <== ADD THIS
};
