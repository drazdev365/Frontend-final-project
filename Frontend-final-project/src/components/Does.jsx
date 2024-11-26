export default function Does() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-start items-center mt-[4.375rem] gap-y-10 lg:gap-y-0 px-4">
      {/* Section 1 */}
      <div className="flex flex-col gap-[1.875rem] justify-center items-center">
        <h1 className="text-[1.75rem] sm:text-[2.125rem] font-bold text-center">
          How Does Leasing Work?
        </h1>
        <p className="text-[0.875rem] sm:text-[1rem] w-[18rem] sm:w-[23.75rem] text-center">
          Leasing a vehicle is essentially entering into a long-term rental
          agreement for that vehicle. Unlike a traditional car purchase, you
          don’t actually own the vehicle. Instead, a leasing company purchases
          the vehicle from the dealer on your behalf and then you make monthly
          payments to the leasing company for the duration of your lease. Some
          leases, however, do provide the option to purchase the vehicle at the
          end of the lease.
        </p>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col gap-[1.25rem] justify-center items-center">
        <h2 className="text-[1.25rem] sm:text-[1.75rem] font-bold text-center w-[18rem] sm:w-[23.75rem]">
          Similar to a short-term car rental, there are rules that define:
        </h2>

        {/* Rule 1 */}
        <div className="flex w-[18rem] sm:w-[23.75rem] h-[5rem] gap-[1.875rem] justify-center items-center">
          <div className="w-[5rem] h-[5rem] flex justify-center items-center rounded-full bg-[#0066FF] text-white text-[2.125rem] font-bold">
            <span>1</span>
          </div>
          <p className="text-[0.875rem] sm:text-[1rem] w-[12rem] sm:w-[16.875rem]">
            How much you can drive, stated as annual miles (excess miles are
            charged at a specified rate).
          </p>
        </div>

        {/* Rule 2 */}
        <div className="flex w-[18rem] sm:w-[23.75rem] h-[5rem] gap-[1.875rem] justify-center items-center">
          <div className="w-[5rem] h-[5rem] flex justify-center items-center rounded-full bg-[#0066FF] text-white text-[2.125rem] font-bold">
            <span>2</span>
          </div>
          <p className="text-[0.875rem] sm:text-[1rem] w-[12rem] sm:w-[16.875rem]">
            Types of damage that you may be liable for at the end of your lease.
          </p>
        </div>

        {/* Rule 3 */}
        <div className="flex w-[18rem] sm:w-[23.75rem] h-[5rem] gap-[1.875rem] justify-center items-center">
          <div className="w-[5rem] h-[5rem] flex justify-center items-center rounded-full bg-[#0066FF] text-white text-[2.125rem] font-bold">
            <span>3</span>
          </div>
          <p className="text-[0.875rem] sm:text-[1rem] w-[12rem] sm:w-[16.875rem]">
            The procedures and costs when you return the vehicle at the end of
            your lease.
          </p>
        </div>
      </div>
    </div>
  );
}
