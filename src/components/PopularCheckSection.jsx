import React, { useState, useEffect } from 'react';
import PopularCheckItem from './PopularCheckItem';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PopularChecksSection = () => {
  const [popularChecks, setPopularChecks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularChecks = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE_URL}/popular-checks`); //
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); //
        // Map API response to component props
        const mappedData = data.map(item => ({
          title: item.example_claim_title, //
          claimText: item.claim_text, //
          accuracyPercentage: item.accuracy_percentage, //
          supportingArticles: item.supporting_articles, //
        }));
        setPopularChecks(mappedData);
      } catch (err) {
        console.error("Failed to fetch popular checks:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularChecks();
  }, []);

  if (isLoading) {
    return <div className="text-center py-8">Memuat pengecekan terpopuler...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">Gagal memuat data: {error}</div>;
  }

  if (popularChecks.length === 0) {
    return <div className="text-center py-8">Tidak ada pengecekan populer saat ini.</div>;
  }

  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold mb-6">Pengecekan Terpopuler</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularChecks.map((check, index) => (
          <PopularCheckItem
            key={index}
            title={check.title}
            claimText={check.claimText}
            accuracyPercentage={check.accuracyPercentage}
            supportingArticles={check.supportingArticles}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularChecksSection;