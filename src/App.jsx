import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import PopularChecksSection from './components/PopularCheckSection';
import PopularCheckItem from './components/PopularCheckItem'; // Import for search results

function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResultsUpdate = (results) => {
    setSearchResults(results);
  };

  // Function to render search results or popular checks
  const renderMainContent = () => {
    if (searchResults) {
      return (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Hasil Pemeriksaan:</h2>
          <PopularCheckItem
            claimText={searchResults.claim_text} //
            accuracyPercentage={searchResults.accuracy_percentage} //
            supportingArticles={searchResults.supporting_articles} //
          />
        </div>
      );
    }
    return <PopularChecksSection />;
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen font-sans">
        <header className="bg-white shadow py-4">
          <div className="container mx-auto flex items-center justify-between px-4">
            <h1 className="text-xl font-semibold">
              <Link to="/" className="text-blue-500 font-bold" onClick={() => setSearchResults(null)}>TruthCheck</Link>
            </h1>
            <nav>
              <ul className="flex space-x-4">
                <li><Link to="/" className="hover:text-blue-500" onClick={() => setSearchResults(null)}>Beranda</Link></li>
                <li><Link to="/tentang" className="hover:text-blue-500">Tentang</Link></li>
                <li><Link to="/populer" className="hover:text-blue-500" onClick={() => setSearchResults(null)}>Populer</Link></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-8 px-4">
          <Routes>
            <Route path="/" element={
              <>
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2">Periksa Fakta dalam Sekejap</h2>
                  <p className="text-gray-600">Pastikan kebenaran sebuah pernyataan dengan algoritma AI canggih dan sumber terpercaya.</p>
                </div>
                <SearchBar onResultsUpdate={handleSearchResultsUpdate} />
                {renderMainContent()}
              </>
            } />
            {/* For /populer, you might want a dedicated page or just show the section */}
            <Route path="/populer" element={
                <>
                    <h2 className="text-2xl font-semibold mb-4 text-center">Pengecekan Populer</h2>
                    <PopularChecksSection />
                </>
            } />
          </Routes>
        </main>

        <footer className="bg-white py-6 mt-8">
          {/* ... (footer remains the same) ... */}
           <div className="container mx-auto px-4 text-center text-gray-500">
             <div className="mb-4">
               <h5 className="font-semibold text-gray-700 mb-2">TruthCheck</h5>
               <p className="text-sm">TruthCheck adalah alat pengecekan fakta yang didukung AI.</p>
             </div>
             <div className="mb-4">
               <h5 className="font-semibold text-gray-700 mb-2">Tautan</h5>
               <ul>
                 <li><Link to="/" className="hover:text-blue-500 text-sm" onClick={() => setSearchResults(null)}>Beranda</Link></li>
                 <li><Link to="/tentang" className="hover:text-blue-500 text-sm">Tentang</Link></li>
                 <li><Link to="/populer" className="hover:text-blue-500 text-sm" onClick={() => setSearchResults(null)}>Populer</Link></li>
               </ul>
             </div>
             <div>
               <h5 className="font-semibold text-gray-700 mb-2">Kontak</h5>
               <p className="text-sm">Email: contoh@truthcheck.com</p>
             </div>
             <p className="text-xs mt-4">© {new Date().getFullYear()} TruthCheck. All rights reserved.</p>
           </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;