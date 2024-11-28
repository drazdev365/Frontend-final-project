import React from "react";

export default function VideoSection() {
  return (
    <div className="w-full flex h-full flex-col lg:flex-row  py-12 ">
      {/* Video Section */}
      <div className="flex justify-center h-full w-full lg:w-1/2 mb-8 lg:mb-0">
        <video
          src="AdsVideo.mp4"
          autoPlay
          muted
          loop
          className="w-full sm:w-[100%] lg:w-[100%] h-auto  shadow-xl"
        />
      </div>

      {/* Content Sections */}
      <div className="w-full lg:w-1/2  grid bg-white place-content-between h-auto divide-black border-y-2 border-black divide-y-2 grid-rows-3  ">
        {/* Section 1: How It Works */}
        <div className="text-center sm:px-6 lg:px-12 flex justify-center items-center flex-col">
          <h2 className="text-3xl font-semibold text-primary-100 mb-6">
            How It Works
          </h2>
          <p className="text-lg text-black mb-4">
            At TopCar, we bring you a wide range of car listings from trusted sources, making it easy to find, compare, and choose the right car for your needs. Simply browse listings from various dealers and private sellers, apply filters for make, model, year, price, and more, and view detailed information about each listing to make an informed decision.
          </p>
        </div>

        {/* Section 2: What You Get */}
        <div className="text-center sm:px-6 lg:px-12 flex justify-center items-center flex-col">
          <h2 className="text-3xl font-semibold text-primary-100 mb-6">
            What You Get
          </h2>
          <p className="text-lg text-black mb-4">
            Every listing provides detailed information, so you can confidently make decisions. You'll get comprehensive car details, including the make, model, mileage, and photos. Each listing also includes a transparent condition report, ensuring you know exactly what you're buying. Plus, clear seller information helps you easily get in touch with dealers or private sellers.
          </p>
        </div>

        {/* Section 3: Benefits */}
        <div className="text-center sm:px-6 lg:px-12 flex justify-center items-center flex-col">
        
          <h2 className="text-3xl font-semibold text-primary-100 mb-6">
            Benefits of Using Our Listings
          </h2>
          <p className="text-lg text-black mb-4">
            Our platform offers a seamless car shopping experience with a wide selection of up-to-date listings from trusted sources. You can browse freely without any purchasing obligations, and with real-time updates, you'll never miss a new deal. Our platform makes car shopping easy, reliable, and stress-free.
          </p>
        </div>
      </div>
    </div>
  );
}
