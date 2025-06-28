import React from 'react';
// Ikon baru untuk ringkasan dan tag
import { FiExternalLink, FiInfo, FiTag } from 'react-icons/fi';

const PopularCheckItem = ({ title, claimText, validProbability, hoaxProbability, supportingArticles }) => {
  const displayTitle = title || claimText;

  const validPercent = validProbability * 100;
  const hoaxPercent = hoaxProbability * 100;
  
  const roundedValid = Math.round(validPercent);
  const roundedHoax = Math.round(hoaxPercent);

  // --- LOGIKA BARU UNTUK RINGKASAN ---
  // Menghitung jumlah artikel pendukung yang berstatus hoax dan valid
  const hoaxArticlesCount = supportingArticles.filter(article => article.hoax_status === 'HOAX').length;
  const validArticlesCount = supportingArticles.filter(article => article.hoax_status === 'VALID').length;
  
  // Membuat teks ringkasan yang dinamis
  const getSummaryText = () => {
    if (roundedValid < 50 && hoaxArticlesCount > 0) {
      return `Klaim ini menunjukkan pola yang sangat mirip dengan berita bohong lain. Model kami menemukan ${hoaxArticlesCount} artikel serupa yang telah diverifikasi sebagai hoax.`;
    }
    if (roundedValid >= 50 && validArticlesCount > 0) {
      return `Klaim ini sejalan dengan beberapa berita yang telah terverifikasi. Model kami menemukan ${validArticlesCount} artikel serupa yang berstatus valid.`;
    }
    return 'Analisis model didasarkan pada kemiripan teks dengan database berita kami.';
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      
      <h3 className="font-bold text-xl text-gray-800 mb-4">{displayTitle}</h3>
      
      {/* Bagian Penilaian Model (Alternatif 1 dari sebelumnya) */}
      <div className="mb-4 text-center">
        <h4 className={`text-2xl font-bold mb-2 ${roundedValid >= 50 ? 'text-green-600' : 'text-red-600'}`}>
          {roundedValid >= 50 ? 'Cenderung Fakta' : 'Cenderung Hoax'}
        </h4>
        <div className="flex justify-center items-center space-x-4 text-gray-700">
          <div className="text-center">
            <p className="font-bold text-lg">{roundedValid}%</p>
            <p className="text-xs">Fakta</p>
          </div>
          <div className="h-8 border-l border-gray-300"></div>
          <div className="text-center">
            <p className="font-bold text-lg">{roundedHoax}%</p>
            <p className="text-xs">Hoax</p>
          </div>
        </div>
      </div>
      
      {/* ======================================= */}
      {/* === BAGIAN BARU: KOTAK RINGKASAN ====== */}
      {/* ======================================= */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 my-4">
        <div className="flex items-center text-blue-800 mb-1">
          <FiInfo className="mr-2 flex-shrink-0" />
          <h5 className="font-semibold text-sm">Ringkasan Penilaian</h5>
        </div>
        <p className="text-xs text-blue-700">
          {getSummaryText()}
        </p>
      </div>
      
      {/* ======================================= */}
      {/* ==== BAGIAN SUMBER PENDUKUNG (IMPROVED) ==== */}
      {/* ======================================= */}
      <div className="flex-grow">
        <h4 className="text-base font-semibold text-gray-800 mb-3">Sumber Pendukung:</h4>
        {supportingArticles && supportingArticles.length > 0 ? (
          <ul className="space-y-4"> {/* Menambah space-y untuk memberi ruang lebih */}
            {supportingArticles.slice(0, 3).map((article, index) => (
              <li key={index} className="flex items-start gap-3">
                <FiExternalLink className="flex-shrink-0 text-blue-500 mt-1" />
                <div className="w-full">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="font-medium text-gray-700 hover:text-blue-600 hover:underline transition-colors">
                    {article.title}
                  </a>
                  <div className="flex items-center flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500 mt-1">
                    {/* Info sumber */}
                    <span>{article.source} &bull; {article.published_year}</span>
                    
                    {/* Tag Status (HOAX/VALID) */}
                    <span className={`flex items-center px-2 py-0.5 rounded-full font-medium ${
                      article.hoax_status === 'HOAX' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      <FiTag className="mr-1" size={12} />
                      {article.hoax_status}
                    </span>

                  </div>
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