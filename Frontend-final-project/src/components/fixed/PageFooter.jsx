import React from 'react'
import Footers from '../Footers'

function PageFooter() {
  return (
    <div>
           {/* Footer Section */}
      <footer className="bg-black mt-16 pt-8 pb-6">
        <div className="flex flex-wrap justify-between lg:px-52 px-4">
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
        <div className="flex justify-center gap-7 mt-8">
          <button>
            <img src="/Apple.png" alt="Apple" />
          </button>
          <button>
            <img src="/Google.png" alt="Google" />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <h6 className="text-white text-center w-full md:w-4/5 lg:w-1/2 text-sm">
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
    </div>
  )
}

export default PageFooter