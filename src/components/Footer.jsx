import React from 'react';
// Import Link dari react-router-dom untuk navigasi SPA
import { Link } from 'react-router-dom';
// Import ikon yang relevan
import { FiCheckSquare, FiHome, FiInfo, FiAward, FiMail, FiGithub } from 'react-icons/fi';

const Footer = () => {
  return (
    // Latar belakang semi-transparan dengan border atas untuk memisahkannya dari konten utama
    <footer className="bg-white/60 backdrop-blur-sm border-t border-gray-200 py-10 sm:py-12 mt-16">
      <div className="container mx-auto px-6">
        
        {/* Menggunakan CSS Grid untuk layout yang responsif */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left">
          
          {/* Kolom 1: Informasi Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <FiCheckSquare className="w-7 h-7 text-blue-600" />
              <span className="font-extrabold text-2xl text-gray-800">TruthCheck</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-sm mx-auto md:mx-0">
              Membantu Anda membedakan fakta dari fiksi dengan kekuatan kecerdasan buatan.
            </p>
          </div>
          
          {/* Kolom 2: Tautan Navigasi */}
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">Tautan</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <FiHome size={16} /> Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <FiInfo size={16} /> Tentang
                </Link>
              </li>
              <li>
                <Link to="/populer" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <FiAward size={16} /> Populer
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Sosial Media */}
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@sc.titikoma03.com" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <FiMail size={16} /> Email
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <FiGithub size={16} /> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Garis pemisah dan copyright di bagian paling bawah */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} TruthCheck. Dibuat dengan semangat dan kode.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;