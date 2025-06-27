import React, { useState } from 'react';
// Import ikon yang akan kita gunakan
import { FiSearch, FiLoader, FiAlertTriangle } from 'react-icons/fi';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SearchBar = ({ onResultsUpdate }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    // Menambahkan penekanan tombol Enter untuk memulai pencarian
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    onResultsUpdate(null); // Menghapus hasil sebelumnya

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
      onResultsUpdate(data);
    } catch (err) {
      console.error("Failed to check claim:", err);
      setError(err.message);
      onResultsUpdate(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Fungsi untuk menangani penekanan tombol Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !isLoading) {
      handleSearch();
    }
  };

  return (
    // Card utama dengan shadow yang lebih menonjol dan padding responsif
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-2 max-w-3xl mx-auto border border-gray-200">
      <div className="flex items-center w-full">
        {/* Input field yang sudah di-style */}
        <input
          type="text"
          className="flex-grow w-full bg-transparent text-gray-700 text-base outline-none px-4 py-3"
          placeholder="Masukkan pernyataan yang ingin diperiksa..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress} // Menambahkan event listener keypress
          disabled={isLoading}
        />
        
        {/* Tombol dengan style baru, ikon, dan state loading yang lebih baik */}
        <button
          className={`flex-shrink-0 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 sm:px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              {/* Ikon spinner yang berputar */}
              <FiLoader className="animate-spin" />
              <span>Memeriksa...</span>
            </>
          ) : (
            <>
              {/* Ikon kaca pembesar */}
              <FiSearch className="hidden sm:inline" /> 
              <span>Periksa</span>
            </>
          )}
        </button>
      </div>

      {/* Pesan Error dengan Ikon */}
      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm mt-3 px-2">
          <FiAlertTriangle />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;