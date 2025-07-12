import React, { useState } from 'react';
import axios from 'axios';

function UrlForm() {
  const [url, setUrl] = useState('');
  const [short, setShort] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/shorten', { url });
    setShort(res.data.shortCode);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Enter long URL" />
        <button type="submit">Shorten</button>
      </form>
      {short && <p>Short URL: http://localhost:5000/api/shorten/{short}</p>}
    </div>
  );
}

export default UrlForm;
