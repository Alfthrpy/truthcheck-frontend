import React from 'react';

const PopularCheckItem = ({ title, accuracyPercentage, supportingArticles, claimText }) => {
  // Use example_claim_title if available (from popular checks), otherwise use claim_text (from search)
  const displayTitle = title || claimText;

  // Round accuracyPercentage to two digits behind the comma
  const roundedAccuracy = Math.round((accuracyPercentage + Number.EPSILON) * 100) / 100;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col h-full">
      <h3 className="font-semibold mb-2 text-lg">{displayTitle}</h3>
      {claimText && title && <p className="text-sm text-gray-600 mb-2"><i>"{claimText}"</i></p>}
      <div className="mb-3">
        <span className="text-gray-700 text-sm">Akurasi Pernyataan:</span>
        <div className="bg-gray-200 rounded-full h-5 mt-1 w-full">
          <div
            className={`h-5 rounded-full flex items-center justify-center text-xs font-medium text-white ${roundedAccuracy >= 70 ? 'bg-green-500' : roundedAccuracy >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${roundedAccuracy}%` }}
          >
            {roundedAccuracy}%
          </div>
        </div>
      </div>
      <div>
        <h4 className="text-sm font-semibold text-gray-800 mb-1">Sumber Pendukung:</h4>
        {supportingArticles && supportingArticles.length > 0 ? (
          <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
            {supportingArticles.slice(0, 3).map((article, index) => ( // Show max 3 articles
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 hover:underline">
                  {article.title}
                </a>
                <span className="text-xs text-gray-500 block"> ({article.source} - {article.published_year})</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-600">Tidak ada artikel pendukung yang ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default PopularCheckItem;