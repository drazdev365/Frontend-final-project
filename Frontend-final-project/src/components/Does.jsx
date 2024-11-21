
export default function Does() {
  return (
    <div className="flex justify-center items-start mt-[70px]">
      <div className="flex flex-col gap-[30px]">
        <h1 className="w-[594px] h-[58px] text-[2.125rem] font-bold">
          How Does Leasing Work?
        </h1>
        <p className="w-[380px] h-[126px] text-[16px]">
          Leasing a vehicle is essentially entering into a long term rental
          agreement for that vehicle. Unlike a traditional car purchase, you
          don’t actually own the vehicle. Instead, a leasing company purchases
          the vehicle from the dealer on your behalf and then you make monthly
          payments to the leasing company for the duration of your lease. Some
          leases however, do provide the option to purchase the vehicle at the
          end of the lease.
        </p>
      </div>

      <div className=" flex flex-col gap-[20px]">
        <h2 className="text-[1.75rem] w-[380px] font-bold">
          Similar to a short term car rental, there are rules that define:
        </h2>
        <div className="flex w-[380px] h-[80px] gap-[30px] justify-center items-center">
          <div className="size-[80px] font-bold bg-[#0066FF] justify-center items-center flex rounded-full text-[2.125rem] text-white">
            <span>1</span>
          </div>
          <p className="w-[270px] h-[63px]">
            How much you can drive, stated as annual miles (excess miles are
            charged at a specified rate)
          </p>
        </div>

        <div className="flex w-[380px] h-[80px] gap-[30px] justify-center items-center">
          <div className="size-[80px] font-bold bg-[#0066FF] justify-center items-center flex rounded-full text-[2.125rem] text-white">
            <span>2</span>
          </div>
          <p className="w-[270px] h-[63px]">
            Types of damage that you may be liable for at the end of your lease
          </p>
        </div>

        <div className="flex w-[380px] h-[80px] gap-[30px] justify-center items-center">
          <div className="size-[80px] font-bold bg-[#0066FF] justify-center items-center flex rounded-full text-[2.125rem] text-white">
            <span>3</span>
          </div>
          <p className="w-[270px] h-[63px]">
            The procedures and costs when you return the vehicle at the end of
            your lease
          </p>
        </div>
      </div>
    </div>
  );
}