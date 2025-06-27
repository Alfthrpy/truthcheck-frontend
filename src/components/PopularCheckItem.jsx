import React from 'react';
// Ikon untuk tautan eksternal
import { FiExternalLink } from 'react-icons/fi';

const PopularCheckItem = ({ title, accuracyPercentage, supportingArticles, claimText }) => {
  // Logika untuk menampilkan judul tetap sama, ini sudah bagus
  const displayTitle = title || claimText;

  // Membulatkan persentase, bisa dipersingkat menjadi toFixed(0) untuk bilangan bulat
  const roundedAccuracy = Math.round(accuracyPercentage);

  // Fungsi untuk menentukan warna dan gradien progress bar
  const getProgressBarStyles = (accuracy) => {
    if (accuracy >= 70) {
      return 'from-green-500 to-teal-500'; // Gradien hijau ke teal untuk akurasi tinggi
    }
    if (accuracy >= 40) {
      return 'from-yellow-500 to-orange-500'; // Gradien kuning ke oranye untuk akurasi sedang
    }
    return 'from-red-500 to-pink-600'; // Gradien merah ke pink untuk akurasi rendah
  };

  const gradientClass = getProgressBarStyles(roundedAccuracy);

  return (
    // Card dengan style modern, border halus, dan efek hover
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      
      {/* Judul klaim */}
      <h3 className="font-bold text-xl text-gray-800 mb-4">{displayTitle}</h3>
      
      {/* Bagian Progress Bar yang sudah didesain ulang */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-600">Tingkat Akurasi</span>
          <span className={`text-lg font-bold ${
            roundedAccuracy >= 70 ? 'text-green-600' : roundedAccuracy >= 40 ? 'text-yellow-600' : 'text-red-600'
          }`}>
            {roundedAccuracy}%
          </span>
        </div>
        {/* Track dari progress bar */}
        <div className="bg-gray-200 rounded-full h-2.5 w-full">
          {/* Fill dari progress bar dengan gradien dan animasi */}
          <div
            className={`h-2.5 rounded-full bg-gradient-to-r ${gradientClass} transition-all duration-1000 ease-out`}
            style={{ width: `${roundedAccuracy}%` }}
          ></div>
        </div>
      </div>
      
      {/* Bagian Sumber Pendukung yang sudah didesain ulang */}
      <div className="flex-grow">
        <h4 className="text-base font-semibold text-gray-800 mb-3">Sumber Pendukung:</h4>
        {supportingArticles && supportingArticles.length > 0 ? (
          <ul className="space-y-3">
            {supportingArticles.slice(0, 3).map((article, index) => (
              <li key={index} className="flex items-start gap-3">
                <FiExternalLink className="flex-shrink-0 text-blue-500 mt-1" />
                <div>
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-blue-600 hover:underline transition-colors">
                    {article.title}
                  </a>
                  {/* Info sumber dengan gaya 'badge' */}
                  <span className="text-xs text-gray-500 block mt-1">
                    {article.source} &bull; {article.published_year}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 italic">Tidak ada artikel pendukung yang ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default PopularCheckItem;