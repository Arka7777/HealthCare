const MedicineSearchResults = ({ searchTerm, medicines }) => {
    const filteredMedicines = medicines.filter(
      (medicine) => medicine.name.toLowerCase() === searchTerm.toLowerCase()
    );
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-green-600 mb-4">Medicine Search Results</h2>
        {filteredMedicines.length > 0 ? (
          <ul className="space-y-4">
            {filteredMedicines.map((medicine) => (
              <li key={medicine.id} className="p-4 border border-gray-200 rounded-md">
                <strong className=" text-blue-800 text-[30px] mb-[30px]">{medicine.name}</strong> <br />
                Available at: <span className="text-gray-700 ">{medicine.shop}</span> <br />
                <span className="text-red-500 font-semibold">Price: ${medicine.price}</span> <br />
                <span className="text-gray-600">{medicine.details}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500">No medicines found.</p>
        )}
      </div>
    );
  };
  
  export default MedicineSearchResults;
  