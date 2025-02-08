const ShopSearchResults = ({ searchTerm, shops }) => {
    const filteredShops = shops.filter(
      (shop) => shop.name.toLowerCase() === searchTerm.toLowerCase()
    );
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Shop Search Results</h2>
        {filteredShops.length > 0 ? (
          <ul className="space-y-4">
            {filteredShops.map((shop) => (
              <li key={shop.id} className="p-4 border border-gray-200 rounded-md">
                <strong className="text-lg text-blue-800">{shop.name}</strong> <br />
                <span className="text-gray-600">Location: {shop.location}</span> <br />
                <span className="font-semibold text-green-600">
                  Available Medicines: {shop.medicines.join(", ")}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-500">No shops found.</p>
        )}
      </div>
    );
  };
  
  export default ShopSearchResults;
  