import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero';
import Stat from './components/Stat';
import WhyLease from './components/Whylease';
import Does from './components/Does';
import VideoSection from './components/VideoSection';
import Importance from './components/Importance';
import Footers from './components/Footers';

function App (){
  return (
    <>
      <Navbar />
      <Hero />
      {/* stat */}
      <div className="flex lg:justify-between justify-evenly text-white bg-black py-10 lg:px-32">
        <Stat text="CAR RENTED" numb="240" />
        <span className=" text-[#0066FF]">
          <Stat text="CARTIFIED CLIENTS" numb="235" />
        </span>
        <Stat text="YEARS EXPERINENCE" numb="12+" />
        <Stat text="CAR TYPE" numb="18" />
      </div>
      <WhyLease />
      <Does />
      <VideoSection />

      <div className="flex flex-col justify-center items-center mt-[4.375rem] mb-[1.875rem]">
        <h1 className="text-[2.125rem] w-[43.188rem] font-bold h-[3.625rem] text-center">
          Important Things to Consider
        </h1>
        <h4 className="w-[33.125rem] text-[1rem]">
          Depending on your circumstances and what is important to you, a lease
          could be a great option for your next vehicle. Below are some
          important factors that may influence your decision.
        </h4>
      </div>

      <div className="flex justify-between px-24">
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

      <footer className="bg-black mt-[4.375rem] pt-[1.875rem] pb-[1.25rem]">
        <div className="flex justify-between px-52">
          <Footers
            text1="Product"
            text2="Used"
            text3="New"
            text4="Sell your car"
          />
          <Footers
            text1="Resources"
            text2="Blog"
            text3="FAQ"
            text4="Contact us"
          />
          <Footers text1="Work With TrueCar" text2="Dealers" text3="Partners" />
          <Footers
            text1="About"
            text2="About us"
            text3="Team"
            text4="Careers"
          />
        </div>
        <div className="flex justify-center gap-7 mt-[1.875rem]">
          <button>
            <img src="/Apple.png" alt="" />
          </button>
          <button>
            <img src="/Google.png" alt="" />
          </button>
        </div>
        <div className="flex justify-center mt-[1.875rem]">
          <h6 className="w-[806px] text-white text-center">
            For questions about the TrueCar Auto Buying Service please call
            +2347068095092. <br /> Certified Dealers are contractually obligated
            by TrueCar to meet certain customer service requirements and
            complete the TrueCar Dealer <br /> Certification Program. <br />
            TrueCar does not broker, sell, or lease motor vehicles. Unless
            otherwise noted, all vehicles shown on this website are offered for
            sale by licensed motor vehicle dealers. All vehicles are subject to
            prior sale. By accessing this website, you agree to the TrueCar
            Terms of Service and Privacy Policy.
          </h6>
        </div>
      </footer>
    </>
  );
}

export default App;
