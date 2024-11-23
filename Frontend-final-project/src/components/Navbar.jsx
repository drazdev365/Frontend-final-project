import { useState } from "react";
// import ContactUs from "./ContactUs";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* nav */}
      <div className="absolute top-0 flex justify-center items-center mt-6 w-full z-50">
        <nav className="w-[90%] flex justify-between px-6 md:px-20 bg-center">
          {/* Logo Section */}
          <div className="w-1/2">
            <img src="/logo.png" alt="logo" />
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex w-full items-center justify-between text-white">
            <button>NEW CARS</button>
            <button>PRE-OWNED CARS</button>
            <button>FINANCE</button>
            <button>LEASE VS BUY</button>
            <button>CONTACT US</button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="text-black font-semibold "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            > ☰
            </button>
          </div>
        </nav>


        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white w-full absolute top-16 left-0 z-40 flex flex-col items-center space-y-4 py-4">
            <button onClick={() => setIsMenuOpen(false)}>NEW CARS</button>
            <button onClick={() => setIsMenuOpen(false)}>PRE-OWNED CARS</button>
            <button onClick={() => setIsMenuOpen(false)}>FINANCE</button>
            <button onClick={() => setIsMenuOpen(false)}>LEASE VS BUY</button>
            <button onClick={() => setIsMenuOpen(false)}>CONTACT US</button>
          </div>
        )}
      </div>
    </div>
  );
}
