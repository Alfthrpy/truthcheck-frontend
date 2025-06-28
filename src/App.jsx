import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import PopularChecksSection from "./components/PopularCheckSection";
import PopularCheckItem from "./components/PopularCheckItem";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import About from "./components/About";


function App() {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResultsUpdate = (results) => {
    setSearchResults(results);
  };

  // Fungsi untuk merender konten utama (hasil pencarian atau item populer)
  const renderMainContent = () => {
    if (searchResults) {
      return (
        <div className="mt-10 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Hasil Pemeriksaan:
          </h2>
          {/* Hasil pencarian sekarang juga dalam bentuk card yang menarik */}
          <PopularCheckItem
            claimText={searchResults.claim_text}
            validProbability={searchResults.valid_probability}
            hoaxProbability={searchResults.hoax_probability}
            accuracyPercentage={searchResults.accuracy_percentage}
            supportingArticles={searchResults.supporting_articles}
          />
        </div>
      );
    }
    // Menampilkan section populer jika tidak ada pencarian
    return (
      <>
        <h2 className="text-3xl font-bold text-gray-800 text-center mt-16 mb-6">
          Pengecekan Populer
        </h2>
        <PopularChecksSection />
      </>
    );
  };

  return (
    <Router>
      {/* Latar belakang dengan gradien halus */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-100 min-h-screen font-sans text-gray-700">
        <Header setSearchResults={handleSearchResultsUpdate} />
        <main className="container mx-auto py-8 sm:py-12 px-4 sm:px-6">
          <Routes>
            <Route
              path="/"
              element={
                <HeroSection
                  handleSearchResultsUpdate={handleSearchResultsUpdate}
                  renderMainContent={() => renderMainContent()}
                />
              }
            />

            <Route
              path="/populer"
              element={
                <>
                  <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Pengecekan Populer
                  </h2>
                  <PopularChecksSection />
                </>
              }
            />

            <Route path="/tentang" element={<About />} />
          </Routes>
        </main>

        {/* Footer dengan desain yang disesuaikan */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
