import React, { useState, useEffect } from "react";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(20);
  const [loading, setLoading] = useState(false);

  // Function to fetch cars data from the API
  const fetchCars = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://auto.dev/api/listings?apikey=ZrQEPSkKZGF1ZGFhYmR1bHJhemFxQGdtYWlsLmNvbQ=="
      );
      const data = await response.json();
      setCars(data.listings); // Assuming data.listings contains the cars list
    } catch (error) {
      console.error("Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  // Load initial data
  useEffect(() => {
    fetchCars();
  }, []);

  // Function to load more cars
  const loadMoreCars = () => {
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 20);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cars Listings</h1>

      {/* Display Loading Indicator */}
      {loading && <p>Loading cars...</p>}

      {/* Display Cars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.slice(0, visibleCars).map((car, index) => (
          <div key={index} className="border rounded p-4 shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">
              {car.make} {car.model}
            </h2>
            <p className="text-gray-600">{car.description}</p>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCars < cars.length && (
        <button
          onClick={loadMoreCars}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Show More
        </button>
      )}
    </div>
  );
};

export default CarsList;
