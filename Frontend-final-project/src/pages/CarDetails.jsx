import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from "@material-tailwind/react";
import { Helmet } from 'react-helmet';

const VehicleDetail = () => {
  const { vin } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [relatedCars, setRelatedCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVehicleDetails = async () => {
      try {
        const response = await fetch(`https://auto.dev/api/listings/${vin}?apikey=ZrQEPSkKcGQzMDcyODk0QGdtYWlsLmNvbQ==`);
        const data = await response.json();
        setVehicle(data);

        // Fetch related cars based on the make of the current vehicle
        if (data?.make) {
          fetchRelatedCars(data.year,data.make);
        }
      } catch (error) {
        console.error("Error fetching vehicle data: ", error);
      } finally {
        setLoading(false);
      }
    };

    const fetchRelatedCars = async (year,make) => {
      try {
        const relatedResponse = await fetch(`https://auto.dev/api/listings?apikey=ZrQEPSkKcGQzMDcyODk0QGdtYWlsLmNvbQ==&year_min=${year === 2024 || year === 2025 || year === 2026 ? year - 1 : year + 1}&make=${make}`);
        const relatedData = await relatedResponse.json();
        const filteredListings = (relatedData.records || []).filter(
          (car) => car.price && car.photoUrls && car.photoUrls.length > 0
        );
        setRelatedCars(filteredListings);
      } catch (error) {
        console.error("Error fetching related cars: ", error);
      }
    };

    fetchVehicleDetails();
  }, [vin]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!vehicle) {
    return <div>Vehicle not found!</div>;
  }

  const seoTitle = vehicle.pageTitleText || `Used ${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  const seoDescription = vehicle.pageMetaDescription || `${vehicle.price} - Used ${vehicle.make} ${vehicle.model} for sale in ${vehicle.city}, ${vehicle.state}.`;

  const slicedFeatures = (vehicle.features || []).slice(0, 5);

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={vehicle.photoUrls?.[0] || 'https://via.placeholder.com/600'} />
        <link rel="canonical" href={`https://autolist.com${window.location.pathname}`} />
      </Helmet>

      <div className="vehicle-detail flex flex-col lg:flex-row p-6 gap-6">
        {/* Carousel */}
        <div className="carousel-container lg:w-1/2">
          <Carousel className="rounded-xl h-96">
            {(vehicle.photoUrls || []).map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`vehicle-image-${index}`}
                className="h-full w-full object-cover"
              />
            ))}
          </Carousel>
        </div>

        {/* Vehicle Details */}
        <div className="details-container lg:w-1/2">
          <h1 className="text-3xl font-bold">{vehicle.year} {vehicle.make} {vehicle.model}</h1>
          <h2 className={`text-xl capitalize text-gray-600 ${vehicle.normalizedTrim ? "block" : "hidden"}`}>{vehicle.normalizedTrim || 'N/A'}</h2>
          <p className="mt-4">{vehicle.description.slice(0,490) || 'No description available'}...</p>
          <p className="mt-2"><strong>Dealer:</strong> {vehicle.dealerName || 'N/A'}</p>
          <p><strong>Location:</strong> {vehicle.city}, {vehicle.state}</p>
          <p><strong>Price:</strong> ${vehicle.price?.toLocaleString() || 'N/A'}</p>
          <p><strong>Condition:</strong> {vehicle.condition || ''}</p>
          <p><strong>Mileage:</strong> {vehicle.mileage?.toLocaleString() || 'N/A'} miles</p>

          {/* Features */}
          {/* <h3 className="mt-4 text-lg font-semibold">Features:</h3>
          <ul className="list-disc ml-6">
            {slicedFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
            {vehicle.features?.length > 5 && <li>...and more features</li>}
          </ul> */}
        </div>
      </div>




      <div className="vehicle-features p-6">
  {/* Interior Section */}
 
 <div className='grid grid-cols-2'>
 <div className="interior-section mb-8">
    <h3 className="text-2xl font-bold mb-4">Interior Details</h3>
    <div className="w-fit flex flex-wrap gap-4">
      {/* <div className="border rounded-lg p-4">
        <h4 className="text-lg font-semibold">Interior Color</h4>
        <p>{vehicle.interiorColor}</p>
      </div> */}
      {vehicle.interiorFeatures.map((feature, index) => (
        <div key={index} className="border-[2px] border-primary-100/20 rounded-lg p-2 w-fit">
          <p>{feature}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Exterior Section */}
  <div className="exterior-section mb-8">
    <h3 className="text-2xl font-bold mb-4">Exterior Details</h3>
    <div className="w-fit flex flex-wrap gap-4">
      {/* <div className="border rounded-lg p-4">
        <h4 className="text-lg font-semibold">Exterior Color</h4>
        <p>{vehicle.exteriorColor}</p>
      </div> */}
      {vehicle.exteriorFeatures.map((feature, index) => (
        <div key={index} className="border-[2px] border-primary-100/20 rounded-lg p-2 w-fit">
          <p>{feature}</p>
        </div>
      ))}
    </div>
  </div>
 </div>

  {/* General Features */}
  <div className="features-section cursor-pointer">
    <h3 className="text-2xl font-bold mb-4">Features</h3>
    <div className="w-fit flex flex-wrap gap-4">
      {vehicle.features.slice(0,15).map((feature, index) => (
        <div key={index} className="border-[2px] border-primary-100/20 rounded-lg p-2 w-fit">
          <p>{feature}</p>
        </div>
      ))}
    </div>
  </div>
</div>









      {/* Related Cars Section */}
      <div className="related-cars mt-12 p-6">
        <h2 className="text-2xl font-bold mb-6">Related Cars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedCars.length > 0 ? (
            relatedCars.slice(0,8).map((car) => (
              <div key={car.vin} className="related-car-card border rounded-lg shadow-sm p-4">
                <img
                  src={car.photoUrls[0] || 'https://via.placeholder.com/300'}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold">{car.year} {car.make} {car.model}</h3>
                <p className="text-sm text-gray-600">{car.city}, {car.state}</p>
                <p className="text-sm text-gray-600">Price: {car.price?.toLocaleString() || 'N/A'}</p>
                <p className="text-sm text-gray-600">Mileage: {car.mileage?.toLocaleString() || 'N/A'} miles</p>
                <a href={`/browse/${car.vin}`} className="text-blue-600 hover:underline mt-2 inline-block">
                  View Details
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No related cars found for this make.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default VehicleDetail;
