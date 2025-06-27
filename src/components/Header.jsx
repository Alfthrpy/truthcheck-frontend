import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiCheckSquare, FiMenu, FiX } from "react-icons/fi";

const Header = ({ setSearchResults }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const clearResults = () => setSearchResults?.(null);

  const handleNavClick = (cb) => {
    setMobileOpen(false);
    cb?.();
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo + judul */}
        <h1 className="text-2xl font-bold">
          <Link
            to="/"
            className="text-blue-600 flex items-center gap-2"
            onClick={() => handleNavClick(clearResults)}
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
            onClick={() => handleNavClick(clearResults)}
          >
            Beranda
          </Link>
          <Link
            to="/tentang"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            onClick={() => handleNavClick()}
          >
            Tentang
          </Link>
          <Link
            to="/populer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
            onClick={() => handleNavClick(clearResults)}
          >
            Populer
          </Link>
        </nav>

        {/* Hamburger button for mobile */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Open navigation menu"
        >
          {mobileOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg absolute top-full left-0 w-full z-50 animate-fade-in">
          <div className="flex flex-col py-3 px-6 space-y-2">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => handleNavClick(clearResults)}
            >
              Beranda
            </Link>
            <Link
              to="/tentang"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => handleNavClick()}
            >
              Tentang
            </Link>
            <Link
              to="/populer"
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
              onClick={() => handleNavClick(clearResults)}
            >
              Populer
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
