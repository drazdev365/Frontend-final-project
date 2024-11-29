import React from 'react'
import Footers from '../Footers'

function PageFooter() {
    return (
        <div className='flex flex-col lg:flex-row-reverse p-5 bg-black'>
            <div className="flex  justify-between px-4">
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
                {/* <Footers text1="Work with us" text2="Dealers" text3="Partners" /> */}

            </div>
            {/* Footer Section */}
            <footer className="w-full">

                <div className="flex justify-start gap-7 mt-8">
                    <button>
                        <img src="/Apple.png" alt="Apple" />
                    </button>
                    <button>
                        <img src="/Google.png" alt="Google" />
                    </button>
                </div>
                <div className="flex  mt-8">
                    <h6 className="text-white text-start w-full text-sm">
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