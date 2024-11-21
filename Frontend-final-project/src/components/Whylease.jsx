
export default function Whylease() {
  return (
    <div className="flex flex-col justify-center items-center gap-[30px] h-[431px] mt-[70px]">
      <h1 className="text-[2.125rem] font-bold">Why Lease with D&M?</h1>
      <div className="flex gap-[26px]">
        {/* one */}
        <div className="flex flex-col justify-center items-center w-fit gap-[30px] h-fit">
          <div className=" flex border rounded-full border-[#0066FF] size-[150px] justify-center items-center">
            <img
              src="/CarIcon.svg"
              alt="icon"
              className="flex justify-center items-center"
            />
          </div>
          <h1 className="text-[1.75rem] text-center">Top dealers</h1>
          <p className="text-[16px] w-[270px]">
            TrueCar Certified Dealers compete for your business by providing
            discounted pricing on in-stock inventory.
          </p>
        </div>
        {/* two */}
        <div className="flex flex-col justify-center items-center w-fit gap-[30px] h-fit">
          <div className=" flex border rounded-full border-[#0066FF] size-[150px] justify-center items-center">
            <img
              src="/Division.svg"
              alt="icon"
              className="flex justify-center items-center"
            />
          </div>
          <h1 className="text-[1.75rem] text-center">Discounted Pricing</h1>
          <p className="text-[16px] w-[270px]">
            View local inventory from the comfort of home and get access to
            guaranteed savings on the car of your choice.
          </p>
        </div>
        {/* three */}
        <div className="flex flex-col justify-center items-center w-fit gap-[30px] h-fit">
          <div className=" flex border rounded-full border-[#0066FF] size-[150px] justify-center items-center">
            <img
              src="/Atm.svg"
              alt="icon"
              className="flex justify-center items-center"
            />
          </div>
          <h1 className="text-[1.75rem] text-center">Lower Payments</h1>
          <p className="text-[16px] w-[260px]">
            Get discounted pricing when you shop for a car or truck using
            TrueCar and save on your lease payment.
          </p>
        </div>
        {/* four */}
        <div className="flex flex-col justify-center items-center w-fit gap-[30px] h-fit">
          <div className=" flex border rounded-full border-[#0066FF] size-[150px] justify-center items-center">
            <img
              src="/ArrowUp.svg"
              alt="icon"
              className="flex justify-center items-center"
            />
          </div>
          <h1 className="text-[1.75rem] text-center">Easy Upgrade</h1>
          <p className="text-[16px] w-[270px]">
            Easy to upgrade to the newest vehicle model every few years if you
            would like to be modern and comfortable
          </p>
        </div>
      </div>
    </div>
  );
}