import React, { useState } from 'react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SearchBar = ({ onResultsUpdate }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    onResultsUpdate(null); // Clear previous results

    try {
      const response = await fetch(`${API_BASE_URL}/check-claim`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ claim_text: query }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      onResultsUpdate(data); // Send data to parent component (App.jsx)
    } catch (err) {
      console.error("Failed to check claim:", err);
      setError(err.message);
      onResultsUpdate(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex">
        <input
          type="text"
          className="flex-grow outline-none px-4"
          placeholder="Masukkan pernyataan yang ingin diperiksa..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
        />
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? 'Memeriksa...' : 'Periksa'}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
};

export default SearchBar;