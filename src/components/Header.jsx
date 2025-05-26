import React from 'react';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-sm">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-blue-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span className="text-xl font-bold text-gray-800">TruthCheck</span>
        </div>
        <ul className="flex space-x-6 text-gray-600">
          <li>
            <a href="#" className="hover:text-blue-600 font-medium">Beranda</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 font-medium">Tentang</a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 font-medium">Populer</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;