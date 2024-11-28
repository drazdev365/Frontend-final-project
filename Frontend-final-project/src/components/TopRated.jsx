import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopRatedCars = ({ title = "Top Rated Cars" }) => {
  const [topRatedCars, setTopRatedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopRatedCars = async () => {
      try {
        const response = await fetch(
          'https://auto.dev/api/listings?apikey=ZrQEPSkKcGQzMDcyODk0QGdtYWlsLmNvbQ==&year_min=2024&make=Ferrari&exterior_color[]=red'
        );
        const data = await response.json();
        setTopRatedCars(data.records || []);
      } catch (err) {
        setError('Failed to load top-rated cars.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopRatedCars();
  }, []);

  if (loading) {
    return <div>Loading top-rated cars...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="top-rated-cars my-12 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topRatedCars.slice(0,4).map((car) => (
          <div key={car.vin} className="car-card border rounded-lg shadow-sm p-4">
            <img
              src={car.photoUrls[0] || 'https://via.placeholder.com/300'}
              alt={`${car.year} ${car.make} ${car.model}`}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg text-primary-100 font-bold">{car.year} {car.make} {car.model}</h3>
            <p className="text-sm text-gray-600">{car.city}, {car.state}</p>
            <p className="text-sm text-gray-600">Price: {car.price}</p>
            <p className="text-sm text-gray-600">Mileage: {car.mileage} miles</p>
            <Link
              to={`/browse/${car.vin}`}
              className="text-white px-3 py-2 rounded-md bg-black  hover:underline mt-2 inline-block"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedCars;
