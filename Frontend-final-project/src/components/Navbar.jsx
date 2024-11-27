import { useState } from "react";

export default function Navbar({ onNewCarsClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Nav */}
      <div className="absolute top-0 left-0 w-full z-50 mt-6">
        <nav className="flex justify-between items-center px-6 md:px-20 bg-center w-full">
          {/* Logo Section */}
          <div className="w-1/2 flex justify-start items-center">
            <img src="/logo.png" alt="logo" className="h-10" />
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex w-full items-center justify-center space-x-6 text-white">
            <button onClick={onNewCarsClick}>NEW CARS</button>
            <button>PRE-OWNED CARS</button>
            <button>FINANCE</button>
            <button>LEASE VS BUY</button>
            <button>CONTACT US</button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <button
              className="text-black font-semibold"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white w-full absolute top-16 left-0 z-40 flex flex-col items-center space-y-4 py-4">
            <button
              onClick={() => {
                onNewCarsClick();
                setIsMenuOpen(false);
              }}
            >
              NEW CARS
            </button>
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
