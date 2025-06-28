import React from 'react';
import { Link } from 'react-router-dom';
import { FiTarget, FiCpu, FiCheckCircle, FiShield, FiEye, FiZap, FiUsers, FiArrowRight } from 'react-icons/fi';
import truthImg from '../assets/truth.jpg';

// Komponen kecil untuk kartu Nilai-Nilai dan Teknologi agar kode lebih rapi
const FeatureCard = ({ icon, title, children }) => (
  <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="mx-auto bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
  </div>
);

// Komponen kecil untuk kartu Tim
const TeamMemberCard = ({ name, role }) => (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-lg text-center">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 mx-auto mb-4 flex items-center justify-center">
            <FiUsers size={40} className="text-white"/>
        </div>
        <h4 className="font-bold text-lg text-gray-900">{name}</h4>
        <p className="text-blue-600 font-medium text-sm">{role}</p>
    </div>
);


const AboutPage = () => {
  return (
    <div className="animate-fade-in">
      {/* ====== Hero Section ====== */}
      <section className="text-center py-20 sm:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 mb-4 leading-tight">
          Membongkar Disinformasi,<br />
          <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">
            Satu Klaim Sekaligus
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-600">
          TruthCheck lahir dari keresahan akan masifnya peredaran berita bohong. Kami percaya, kebenaran adalah hak dan teknologi adalah alat untuk menjaganya.
        </p>
      </section>

      {/* ====== Misi Kami Section ====== */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Misi Kami</h2>
            <p className="text-gray-600 mt-2">Memberdayakan masyarakat dengan alat verifikasi informasi yang mudah, cepat, dan terpercaya.</p>
          </div>
          {/* Anda bisa mengganti ikon ini dengan gambar atau ilustrasi */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-xl p-8 md:p-12 border border-white/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <FiTarget size={80} className="mx-auto md:mx-0 text-blue-500 mb-6"/>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Kami bertekad untuk menjadi garda terdepan dalam perang melawan hoaks dengan menyediakan platform yang tidak hanya memeriksa fakta, tetapi juga mengedukasi pengguna tentang cara berpikir kritis terhadap informasi yang diterima.
                </p>
              </div>
              <img src={truthImg} alt="Misi Kami" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ====== Teknologi Kami Section ====== */}
      <section className="py-16 sm:py-20 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Bagaimana Cara Kerjanya?</h2>
            <p className="text-gray-600 mt-2">Menggabungkan kekuatan AI dan jurnalisme data dalam 3 langkah sederhana.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={<FiCpu size={24} />} title="1. Analisis AI">
              Klaim yang Anda masukkan dianalisis oleh model AI kami untuk memahami konteks, entitas, dan sentimen.
            </FeatureCard>
            <FeatureCard icon={<FiCheckCircle size={24} />} title="2. Validasi Silang">
              Sistem kami secara otomatis membandingkan klaim dengan ribuan sumber berita terpercaya dari beberapa sumber.
            </FeatureCard>
            <FeatureCard icon={<FiShield size={24} />} title="3. Skor Akurasi">
              Hasilnya disajikan dalam bentuk skor akurasi yang mudah dipahami, lengkap dengan artikel pendukung.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* ====== Nilai-Nilai Kami Section ====== */}
      <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Nilai-Nilai Kami</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FeatureCard icon={<FiEye size={24} />} title="Objektivitas">Kami berkomitmen pada netralitas dan menyajikan data apa adanya tanpa bias.</FeatureCard>
                  <FeatureCard icon={<FiZap size={24} />} title="Kecepatan">Informasi harus diverifikasi secepat ia menyebar. Sistem kami dirancang untuk kecepatan.</FeatureCard>
                  <FeatureCard icon={<FiUsers size={24} />} title="Transparansi">Kami menunjukkan sumber-sumber kami agar Anda bisa menelusuri kebenarannya sendiri.</FeatureCard>
              </div>
          </div>
      </section>

      {/* ====== Tim Kami Section (Placeholder) ====== */}
      <section className="py-16 sm:py-20 bg-white/50">
          <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Di Balik Layar</h2>
                  <p className="text-gray-600 mt-2">Proyek ini dikerjakan oleh individu-individu yang bersemangat.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <TeamMemberCard name="Nabila Lailatanzila" role="Lead Developer" />
                  <TeamMemberCard name="Muhammad Rizki Al-Fathir" role="AI Engineer & Fullstack Developer" />
                  <TeamMemberCard name="Muhammad Saifurridwani I'jazi" role="Researcher" />
                  <TeamMemberCard name="Riza Anwar Fadil" role="Cloud Engineer" />
                  <TeamMemberCard name="Nirwan Rasyid Ridho" role="UI/UX" />
              </div>
          </div>
      </section>

      {/* ====== Call to Action (CTA) Section ====== */}
      <section className="py-20">
          <div className="container mx-auto px-4">
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-2xl text-white p-10 text-center">
                  <h2 className="text-3xl font-bold mb-4">Siap Memeriksa Fakta?</h2>
                  <p className="mb-6 max-w-xl mx-auto">Jangan biarkan keraguan menghentikan Anda. Mulai verifikasi informasi pertama Anda sekarang juga.</p>
                  <Link to="/" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors transform hover:scale-105 duration-300">
                      Coba Sekarang <FiArrowRight />
                  </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default AboutPage;