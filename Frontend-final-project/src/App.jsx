import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Stat from "./components/Stat";
import WhyLease from "./components/Whylease";
import Does from "./components/Does";
import VideoSection from "./components/VideoSection";
import Importance from "./components/Importance";
import Footers from "./components/Footers";
import CarsList from "./components/CarsList";
import PageFooter from "./components/fixed/PageFooter";

function App() {
  const [showCarsList, setShowCarsList] = useState(false);

  // Handle the "NEW CARS" button click
  const handleNewCarsClick = () => {
    setShowCarsList(true);
  };

  return (
    <div className="flex flex-col justify-center px-4">
      <Navbar onNewCarsClick={handleNewCarsClick} />

      {/* Conditionally render the CarsList component */}
      {!showCarsList ? (
        <CarsList />
      ) : (
        <>
          <Hero />

          {/* Stat Section */}
          <div className="flex flex-wrap justify-between text-white bg-black py-10 lg:px-32 px-4">
            <Stat text="CAR RENTED" numb="240" />
            <span className="text-[#0066FF]">
              <Stat text="CERTIFIED CLIENTS" numb="235" />
            </span>
            <Stat text="YEARS EXPERIENCE" numb="12+" />
            <Stat text="CAR TYPES" numb="18" />
          </div>

          <WhyLease />
          <Does />
          <VideoSection />

          {/* Important Things to Consider */}
          <div className="flex flex-col justify-center items-center mt-16 mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center">
              Important Things to Consider
            </h1>
            <h4 className="w-full md:w-4/5 lg:w-1/2 text-base text-center mt-4">
              Depending on your circumstances and what is important to you, a
              lease could be a great option for your next vehicle. Below are
              some important factors that may influence your decision.
            </h4>
          </div>

          {/* Importance Section */}
          <div className="flex flex-col md:flex-row flex-wrap justify-between lg:px-24 px-4 gap-y-10 lg:gap-y-0">
            <Importance
              image="/Imp6.png"
              text="Monthly payments on leases are generally 20% - 30% cheaper than loans"
            />
            <Importance
              image="Imp7.png"
              text="You may be eligible for a tax break if you use the leased vehicle for business purposes"
            />
            <Importance
              image="Imp8.png"
              text="Easy to upgrade to the newest vehicle model every few years"
            />
            <Importance
              image="Imp9.png"
              text="There are often fees charged if you drive more than your lease's mileage allowance"
            />
          </div>
        </>
      )}

      <PageFooter />
    </div>
  );
}

export default App;
