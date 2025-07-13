import React, { useState } from 'react';
import axios from 'axios';

const API = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';

function UrlForm() {
  const [url, setUrl] = useState('');
  const [short, setShort] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/shorten`, { url });
      setShort(res.data.shortCode);
    } catch (error) {
      console.error('Error shortening URL:', error.message);
      alert('Something went wrong. Please check the backend or URL.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">URL Shortener</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter long URL"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Shorten
          </button>
        </form>
        {short && (
          <div className="alert alert-success mt-4 text-center">
            Short URL:{' '}
            <a href={`${API}/api/shorten/${short}`} target="_blank" rel="noopener noreferrer">
              {API}/api/shorten/{short}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default UrlForm;
