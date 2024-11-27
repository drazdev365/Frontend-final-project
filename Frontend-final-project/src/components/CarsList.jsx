import React, { useState, useEffect } from "react";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [visibleCars, setVisibleCars] = useState(5);
  const [loading, setLoading] = useState(false);

  const fetchCars = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://auto.dev/api/listings?apikey=ZrQEPSkKZGF1ZGFhYmR1bHJhemFxQGdtYWlsLmNvbQ=="
      );
      const data = await response.json();
      console.log(data.records);
      setCars(data.records || []); // Fallback to an empty array if listings are undefined
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
    setVisibleCars((prevVisibleCars) => prevVisibleCars + 5); // Load 20 more cars
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Cars Listings</h1>

      {loading && <p>Loading cars...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.slice(0, visibleCars).map((car, index) => (
          <div key={index}>
            <div>
              <img src={car.primaryPhotoUrl} alt="" />
            </div>
            <div className="border rounded p-4 shadow-md bg-white">
              <h2 className="text-xl font-semibold mb-2">
                Maker: {car.make || "N/A"}
              </h2>
              <p className="text-gray-600">Year: {car.year || "N/A"}</p>
              <p className="text-gray-600">Colour: {car.displayColor || "N/A"}</p>
              <p className="text-gray-600">Price: {car.price || "N/A"}</p>
              <p className="text-gray-600">Mileage: {car.mileage || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>

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
