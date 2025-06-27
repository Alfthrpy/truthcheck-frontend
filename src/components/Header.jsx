import React from "react";
import { Link } from "react-router-dom";
import { FiCheckSquare } from "react-icons/fi";

const Header = ({ setSearchResults }) => {
  // Satu helper agar tidak menulis fungsi yang sama berkali-kali
  const clearResults = () => setSearchResults?.(null);

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo + judul */}
        <h1 className="text-2xl font-bold">
          <Link
            to="/"
            className="text-blue-600 flex items-center gap-2"
            onClick={clearResults}
          >
            <FiCheckSquare />
            TruthCheck
          </Link>
        </h1>

        {/* Navigasi desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            onClick={clearResults}
          >
            Beranda
          </Link>

          <Link
            to="/tentang"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
          >
            Tentang
          </Link>

          <Link
            to="/populer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            onClick={clearResults}
          >
            Populer
          </Link>
        </nav>

        {/* Tempatkan tombol hamburger di sini untuk tampilan mobile jika diperlukan */}
      </div>
    </header>
  );
};

export default Header;
