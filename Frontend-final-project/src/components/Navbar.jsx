import { useEffect, useState } from "react";
import { linkData } from "../data/db";
import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFloat, setIsFloat] = useState(false);


  useEffect(() => {
    if (window.scrollY > 0) {
      setIsFloat(true);
      console.log("user started scrolling");
    }
    else {
      // setIsFloat(false);
      console.log("user stopped scrolling");
    }
  }, [])

  return (
    <div className={`flex flex-col z-50 w-full ${isFloat ? "fixed bg-green-500 top-0" : "relative"} `}>
      <nav className={`flex  w-full bg-white z-50 justify-between cursor-pointer items-center px-6 md:px-24 py-4`}>
        {/* Logo Section */}
        <Link to={"/"} className="text-xl text-primary-100 font-semibold">
          TOPCAR
        </Link>
        <div className="justify-between hidden text-black text-sm lg:flex w-[30%] items-center">
          {
            linkData.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "border-b-[2px] font-semibold border-primary-100" : ""
                }
              >
                {link.label}
              </NavLink>
            ))
          }
        </div>
        <Link to={"/contact"} className="bg-primary-100 lg:block hidden px-4 text-sm font-semibold text-white rounded-lg py-2">
          Contact Us
        </Link>
        <p
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-primary-100 lg:hidden block text-white text-3xl p-1">
         {
          isMenuOpen ? (<IoClose />) : ( <BiMenu />)
         }
        </p>
        {/* Mobile Menu */}

      </nav>

      <div className="z-50">
        {
          isMenuOpen && (
            <div className="justify-between lg:hidden gap-3 border-2 bg-gray-300 
             py-5 text-black text-sm flex-col flex w-[100%] items-center">
              {
                linkData.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "border-b-[2px] font-semibold border-primary-100" : ""
                    }
                  >
                    {link.label}
                  </NavLink>
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  )

  // return (
  //   <>
  //       <nav className="flex justify-between items-center px-6 md:px-20 bg-center w-full">
  //         {/* Logo Section */}
  //         <div className="w-1/2 flex justify-start items-center">
  //           <p>TOPCAR</p>
  //         </div>

  //         {/* Navigation Buttons */}
  //         <div className="hidden md:flex w-full items-center justify-center space-x-6 text-white">
  //         {
  //         NavLinksData.map((link) => (
  //           <NavLink
  //             key={link.id}
  //             to={link.path}
  //             className="text-primary-100"
  //           >
  //             {link.label}
  //           </NavLink>
  //         ))
  //        }
  //         </div>

  //         {/* Mobile Hamburger Menu */}
  //         <div className="md:hidden flex items-center">
  //           <button
  //             className="text-black font-semibold"
  //             onClick={() => setIsMenuOpen(!isMenuOpen)}
  //           >
  //             ☰
  //           </button>
  //         </div>
  //       </nav>

  //       {/* Mobile Menu */}
  //       {/* {isMenuOpen && (
  //         <div className="md:hidden bg-gray-800 text-white w-full absolute top-16 left-0 z-40 flex flex-col items-center space-y-4 py-4">
  //           <button
  //             onClick={() => {
  //               onNewCarsClick();
  //               setIsMenuOpen(false);
  //             }}
  //           >
  //             NEW CARS
  //           </button>
  //           <button onClick={() => setIsMenuOpen(false)}>PRE-OWNED CARS</button>
  //           <button onClick={() => setIsMenuOpen(false)}>FINANCE</button>
  //           <button onClick={() => setIsMenuOpen(false)}>LEASE VS BUY</button>
  //           <button onClick={() => setIsMenuOpen(false)}>CONTACT US</button>
  //         </div>
  //       )} */}
  //   </>
  // );
}
