import SearchBar from "./SearchBar";
import DisclaimerAlert from "./DisclaimerAlert";

const HeroSection = ({ handleSearchResultsUpdate, renderMainContent }) => {
  return (
    <>
      {/* Hero section yang lebih menarik */}
      <div className="text-center my-8 md:my-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 leading-tight">
          Periksa Fakta{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-400 text-transparent bg-clip-text">
            dalam Sekejap
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Pastikan kebenaran sebuah pernyataan dengan algoritma AI canggih dan
          sumber terpercaya.
        </p>
      </div>

      <SearchBar onResultsUpdate={handleSearchResultsUpdate} />
      <DisclaimerAlert>
        <p className="font-bold">Masih dalam Tahap Pengembangan</p>
        <p className="mt-1">
          Harap diperhatikan, basis data kami saat ini mencakup informasi hingga
          tahun 2023. Untuk klaim mengenai peristiwa setelah tahun tersebut
          (misalnya di tahun 2024-2025), hasil mungkin tidak akurat. Gunakan
          dengan bijak.
        </p>
      </DisclaimerAlert>

      {renderMainContent()}
    </>
  );
};

export default HeroSection;
