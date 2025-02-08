import { useState } from "react";
import shops from "../data/shops";
import medicinesData from "../data/medicinesData";
import SearchBar from "../components/SearchBar";
import MedicineSearchResults from "../components/MedicineSearchResults";
import ShopSearchResults from "../components/ShopSearchResults";
import { Mic, MicOff } from "lucide-react"; 

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listening, setListening] = useState(false);
  const [spokenText, setSpokenText] = useState(""); 

  const handleSearch = (query) => {
    setSearchTerm(query.replace(/\./g, "")); 
    setSpokenText(""); 
  };

  const startVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript.replace(/\./g, "");
      setSearchTerm(text);
      setSpokenText(text); 
    };

    recognition.start();
  };

  const isMedicineSearch = medicinesData.some(
    (medicine) => medicine.name.toLowerCase() === searchTerm.toLowerCase()
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-[40px] font-bold text-blue-600 mb-[60px]">Search Medicines</h1>
      <div className="w-full max-w-lg flex items-center space-x-3"> 
        <SearchBar onSearch={handleSearch} />
        <button 
          onClick={startVoiceSearch} 
          className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition"
          title="Click to speak"
        >
          {listening ? <MicOff size={24} /> : <Mic size={24} />} 
        </button>
      </div>
      
      {spokenText && (
        <p className="mt-4 text-gray-700 text-lg font-semibold bg-white p-3 rounded-lg shadow">
          You said: <span className="text-blue-600">{spokenText}</span>
        </p>
      )}
      <div className="w-full max-w-3xl mt-[50px]">
        {isMedicineSearch ? (
          <MedicineSearchResults searchTerm={searchTerm} medicines={medicinesData} />
        ) : (
          <ShopSearchResults searchTerm={searchTerm} shops={shops} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;
