
export default function Does() {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-evenly lg:items-start items-center mt-[4.375rem]">
      <div className="flex flex-col gap-[1.875rem] justify-center items-center">
        <h1 className="w-fit h-[3.625rem] text-[2.125rem] font-bold">
          How Does Leasing Work?
        </h1>
        <p className="w-[23.75rem] h-[7.875rem] text-[1rem]">
          Leasing a vehicle is essentially entering into a long term rental
          agreement for that vehicle. Unlike a traditional car purchase, you
          don’t actually own the vehicle. Instead, a leasing company purchases
          the vehicle from the dealer on your behalf and then you make monthly
          payments to the leasing company for the duration of your lease. Some
          leases however, do provide the option to purchase the vehicle at the
          end of the lease.
        </p>
      </div>

      <div className=" flex flex-col gap-[1.25rem] justify-center items-center">
        <h2 className="text-[1.75rem] w-[23.75rem] font-bold">
          Similar to a short term car rental, there are rules that define:
        </h2>
        <div className="flex w-[23.75rem] h-[5rem] gap-[1.875rem] justify-center items-center">
          <div className="size-[5rem] font-bold bg-[#0066FF] justify-center items-center flex rounded-full text-[2.125rem] text-white">
            <span>1</span>
          </div>
          <p className="w-[16.875rem] h-[3.938rem]">
            How much you can drive, stated as annual miles (excess miles are
            charged at a specified rate)
          </p>
        </div>

        <div className="flex w-[23.75rem] h-[5rem] gap-[1.875rem] justify-center items-center">
          <div className="size-[5rem] font-bold bg-[#0066FF] justify-center items-center flex rounded-full text-[2.125rem] text-white">
            <span>2</span>
          </div>
          <p className="w-[16.875rem] h-[3.938rem]">
            Types of damage that you may be liable for at the end of your lease
          </p>
        </div>

        <div className="flex w-[23.75rem] h-[5rem] gap-[1.875rem] justify-center items-center">
          <div className="size-[5rem] font-bold bg-[#0066FF] justify-center items-center flex rounded-full text-[2.125rem] text-white">
            <span>3</span>
          </div>
          <p className="w-[16.875rem] h-[3.938rem]">
            The procedures and costs when you return the vehicle at the end of
            your lease
          </p>
        </div>
      </div>
    </div>
  );
}