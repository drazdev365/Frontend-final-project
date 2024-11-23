
export default function Whylease() {
  return (
    <div className="flex flex-col justify-center items-center gap-[1.875rem] lg:h-[26.938rem] mt-[4.375rem]">
      <h1 className="text-[2.125rem] font-bold">Why Lease with D&M?</h1>
      <div className="flex lg:flex-row flex-wrap gap-[1.625rem] justify-center">
        {/* one */}
        <div className="flex flex-col justify-center items-center w-fit gap-[1.875rem] h-fit">
          <div className=" flex border rounded-full border-[#0066FF] size-[9.375rem] justify-center items-center">
            <img
              src="/CarIcon.svg"
              alt="icon"
              className="flex justify-center items-center"
            />
          </div>
          <h1 className="text-[1.75rem] text-center">Top dealers</h1>
          <p className="text-[1rem] w-[16.875rem]">
            TrueCar Certified Dealers compete for your business by providing
            discounted pricing on in-stock inventory.
          </p>
        </div>
        {/* two */}
        <div className="flex flex-col justify-center items-center w-fit gap-[1.875rem] h-fit">
          <div className=" flex border rounded-full border-[#0066FF] size-[9.375rem] justify-center items-center">
            <img
              src="/Division.svg"
              alt="icon"
              className="flex justify-center items-center"
            />
          </div>
          <h1 className="text-[1.75rem] text-center">Discounted Pricing</h1>
          <p className="text-[1rem] w-[16.875rem]">
            View local inventory from the comfort of home and get access to
            guaranteed savings on the car of your choice.
          </p>
        </div>
        {/* three */}
        <div className="flex flex-col justify-center items-center w-fit gap-[1.875rem] h-fit">
          <div className=" flex border rounded-full border-[#0066FF] size-[9.375rem] justify-center items-center">
            <img
              src="/Atm.svg"
              alt="icon"
              className="flex justify-center items-center"
            />
          </div>
          <h1 className="text-[1.75rem] text-center">Lower Payments</h1>
          <p className="text-[1rem] w-[16.25rem]">
            Get discounted pricing when you shop for a car or truck using
            TrueCar and save on your lease payment.
          </p>
        </div>
        {/* four */}
        <div className="flex flex-col justify-center items-center w-fit gap-[1.875rem] h-fit">
          <div className=" flex border rounded-full border-[#0066FF] size-[9.375rem] justify-center items-center">
            <img
              src="/ArrowUp.svg"
              alt="icon"
              className="flex justify-center items-center"
            />
          </div>
          <h1 className="text-[1.75rem] text-center">Easy Upgrade</h1>
          <p className="text-[1rem] w-[16.875rem]">
            Easy to upgrade to the newest vehicle model every few years if you
            would like to be modern and comfortable
          </p>
        </div>
      </div>
    </div>
  );
}