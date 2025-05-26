import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-10">
      <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <svg
            className="w-5 h-5 text-blue-600"
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
          <span className="font-bold text-gray-800">TruthCheck</span>
        </div>
        <p className="mb-4">TruthCheck adalah alat pengecekan fakta yang didukung AI.</p>
        <div className="flex justify-center space-x-8 mb-4">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Tautan</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Beranda</a></li>
              <li><a href="#" className="hover:underline">Tentang</a></li>
              <li><a href="#" className="hover:underline">Populer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Kontak</h4>
            <ul className="space-y-1">
              <li><a href="mailto:info@truthcheck.com" className="hover:underline">Email</a></li>
              {/* Tambahkan informasi kontak lain jika ada */}
            </ul>
          </div>
        </div>
        <p>&copy; {new Date().getFullYear()} TruthCheck. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;