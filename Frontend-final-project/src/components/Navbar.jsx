
export default function Navbar (){
  return (
    <div>
      {/* nav */}
      <div className=" absolute top-0 flex justify-center items-center mt-6  w-full  z-50">
        <nav className="  w-[90%] flex justify-between px-20  bg-center">
          <div className=" w-1/2">
            <img src="/logo.png" className="" alt="logo" />
          </div>
          <div className=" flex w-full  items-center  justify-between text-white">
            <button>NEW CARS</button>
            <button>PRE-OWNED CARS</button>
            <button>FINANCE</button>
            <button>LEASE VS BUY</button>
            <button>CONTACT US</button>
          </div>
        </nav>
        {/* subnav */}
      </div>
    </div>
  );
}