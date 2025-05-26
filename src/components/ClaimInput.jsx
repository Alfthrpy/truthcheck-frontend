import React, { useState } from 'react';

const ClaimInput = ({ onSubmit, loading }) => {
  const [claimText, setClaimText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (claimText.trim()) {
      onSubmit(claimText);
    }
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Periksa Fakta dalam Sekejap
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          Pastikan kebenaran sebuah pernyataan dengan algoritma AI canggih dan sumber terpercaya
        </p>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="text"
            className="flex-grow p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            placeholder="Masukkan pernyataan yang ingin diperiksa..."
            value={claimText}
            onChange={(e) => setClaimText(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              'Periksa'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ClaimInput;