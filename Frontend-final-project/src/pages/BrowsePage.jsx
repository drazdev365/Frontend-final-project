import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Filter Component
const FilterComponent = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    make: "Acura",
    model: "MDX",
    yearMin: 2016,
    yearMax: 2022,
    priceMax: 35000,
    transmission: "automatic",
    features: [],
    exteriorColor: "black",
    interiorColor: "black",
    page: 1,
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters, [name]: value };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const handleFeatureChange = (e) => {
    const { value } = e.target;
    setFilters((prevFilters) => {
      const features = prevFilters.features.includes(value)
        ? prevFilters.features.filter((feature) => feature !== value)
        : [...prevFilters.features, value];
      const newFilters = { ...prevFilters, features };
      onFilterChange(newFilters);
      return newFilters;
    });
  };

  const carMakes = [
    "Acura", "Alfa Romeo", "AM General", "Aston Martin", "Audi", "BMW", "Bentley", "Bugatti", "Buick", "Cadillac",
    "Chevrolet", "Chrysler", "Daewoo", "Datsun", "Dodge", "Eagle", "FIAT", "Ferrari", "Fisker", "Ford", "GMC",
    "Genesis", "Geo", "HUMMER", "Honda", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep", "Kia", "Lamborghini",
    "Land Rover", "Lexus", "Lincoln", "Lotus", "MINI", "Maserati", "Maybach", "Mazda", "McLaren", "Mercedes-Benz",
    "Mercury", "Mitsubishi", "Nissan", "Oldsmobile", "Panoz", "Plymouth", "Pontiac", "Porsche", "Ram", "Rolls-Royce",
    "Saab", "Saturn", "Scion", "Smart", "Sterling", "Subaru", "Suzuki", "Tesla", "Toyota", "Volkswagen", "Volvo"
  ];
  return (
    <div className="p-4 border w-[20%] border-gray-300 rounded-md shadow-md space-y-4 bg-white">
    <div className="flex flex-col space-y-2">
        <label className="font-semibold">Make</label>
        <select
          name="make"
          onChange={handleFilterChange}
          value={filters.make}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Make</option>
          {carMakes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Model</label>
        <select name="model" onChange={handleFilterChange} value={filters.model} className="p-2 border border-gray-300 rounded-md">
          <option value="">Select Model</option>
          <option value="MDX">MDX</option>
          <option value="A4">A4</option>
          <option value="Model 3">Model 3</option>
          <option value="Camry">Camry</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Year Range</label>
        <div className="flex space-x-2">
          <input
            type="number"
            name="yearMin"
            value={filters.yearMin}
            onChange={handleFilterChange}
            placeholder="Min Year"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
          <input
            type="number"
            name="yearMax"
            value={filters.yearMax}
            onChange={handleFilterChange}
            placeholder="Max Year"
            className="p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Price Max:$</label>
        <input
          type="number"
          name="priceMax"
          value={filters.priceMax}
          onChange={handleFilterChange}
          placeholder="Max Price"
          className="p-2 border border-gray-300 rounded-md"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Transmission</label>
        <select
          name="transmission"
          onChange={handleFilterChange}
          value={filters.transmission}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Transmission</option>
          <option value="automatic">Automatic</option>
          <option value="manual">Manual</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Features</label>
        <div className="flex flex-col justify-start gap-[2px] items-start ">
          <div className="flex  items-center">
            <input
              type="checkbox"
              value="sunroof"
              onChange={handleFeatureChange}
              checked={filters.features.includes("sunroof")}
              className="mr-2"
            />
            Sunroof
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              value="backup_camera"
              onChange={handleFeatureChange}
              checked={filters.features.includes("backup_camera")}
              className="mr-2"
            />
            Backup Camera
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              value="heated_seats"
              onChange={handleFeatureChange}
              checked={filters.features.includes("heated_seats")}
              className="mr-2"
            />
            Heated Seats
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Exterior Color</label>
        <select
          name="exteriorColor"
          onChange={handleFilterChange}
          value={filters.exteriorColor}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Exterior Color</option>
          <option value="black">Black</option>
          <option value="gray">Gray</option>
        <option value="red">red</option>
          <option value="silver">Silver</option>
        </select>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="font-semibold">Interior Color</label>
        <select
          name="interiorColor"
          onChange={handleFilterChange}
          value={filters.interiorColor}
          className="p-2 border border-gray-300 rounded-md"
        >
          <option value="">Select Interior Color</option>
          <option value="black">Black</option>
          <option value="red">red</option>
          <option value="brown">Brown</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    </div>
  );
};

// Pagination Component
const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="flex items-center justify-between p-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
      >
        Previous
      </button>
      <span className={`text-lg font-semibold ${totalPages=== 0 ? "hidden" : "block"}`}>{currentPage}/ {totalPages}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
      >
        Next
      </button>
    </div>
  );
};

// Main Component


const CarListingPage = () => {
  const [filters, setFilters] = useState({
    yearMin: 2016,
    yearMax: 2022,
    priceMax: 35000,
    make: "Acura",
    model: "MDX",
    transmission: "automatic",
    features: [],
    exteriorColor: "black",
    interiorColor: "black",
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0); // Mock total pages, update based on your data
  const [listings, setListings] = useState([]); // Replace with API response
  const [loading, setLoading] = useState(false); // Loading state

  const fetchData = async () => {
    setLoading(true); // Set loading to true before starting fetch
    const url = `https://auto.dev/api/listings?apikey=ZrQEPSkKcGQzMDcyODk0QGdtYWlsLmNvbQ==&year_min=${filters.yearMin}&year_max=${filters.yearMax}&price_max=${filters.priceMax}&make=${filters.make}&model=${filters.model}&transmission=${filters.transmission}&features[]=${filters.features.join("&features[]=")}&exterior_color=${filters.exteriorColor}&interior_color=${filters.interiorColor}&page=${page}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setListings(data.records || []);
      setTotalPages(data.totalCount || 0); // Adjust based on API response
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters, page]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-start mb-6">
        <FilterComponent onFilterChange={setFilters} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            <div className="text-center col-span-full">
              <p className="text-gray-500">Loading cars...</p>
            </div>
          ) : listings.length > 0 ? (
            listings.map((listing) => (
              <div
                key={listing.vin}
                className="car-card border rounded-lg shadow-sm p-4"
              >
                <img
                  src={listing.photoUrls[0] || "https://via.placeholder.com/300"}
                  alt={`${listing.year} ${listing.make} ${listing.model}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold">
                  {listing.year} {listing.make} {listing.model}
                </h3>
                <p className="text-sm text-gray-600">
                  {listing.city}, {listing.state}
                </p>
                <p className="text-sm text-gray-600">Price: ${listing.price}</p>
                <p className="text-sm text-gray-600">
                  Mileage: {listing.mileage} miles
                </p>
                <Link
                  to={`/browse/${listing.vin}`}
                  className="text-white px-3 py-2 rounded-md bg-black hover:underline mt-2 inline-block"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No cars found. Adjust your filters and try again.
            </p>
          )}
        </div>
      </div>
      <PaginationComponent
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default CarListingPage;
