import { Button, Carousel, IconButton } from "@material-tailwind/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaCar,
  // FaHandShake,
  FaUsers,
} from "react-icons/fa";


export function Hero() {
  const HeroData = [
    {
      imageUrl: "/NavBg.png",
      Headline: "Lease Out Your Vehicle",
      Description:
        "Earn money by listing your vehicle for lease. Connect with renters in need of reliable transportation.",
      Button: "List Your Car",
      icon: <FaCar />,
      href: "/list-car", // Update this link to the actual listing page
    },
    {
      imageUrl: "/NavBg.png",
      Headline: "Find the Perfect Ride",
      Description:
        "Discover a variety of vehicles available for lease to meet your travel or business needs.",
      Button: "Browse Cars",
      icon: <FaSearch/>,
      href: "/browse-cars",
    },
    {
      imageUrl: "/NavBg.png",
      Headline: "Flexible Leasing Options",
      Description:
        "Choose from short-term or long-term leasing options that suit your requirements.",
      Button: "Get Started",
      // icon: <FaHandShake />,
      href: "/get-started",
    },
    {
      imageUrl: "/NavBg.png",
      Headline: "Join Our Community",
      Description:
        "Become part of a trusted network of car owners and renters who prioritize convenience and reliability.",
      Button: "Sign Up",
      icon: <FaUsers />,
      href: "/signup",
    },
  ];


  return (
    <div className=" h-screen">
      <Carousel
        loop={true}
        autoplay={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute hidden sm:inline-block hover:bg-gray-100 transition-all duration-300 rounded-full hover:bg-opacity-10 text-2xl text-fcg-50 top-2/4 left-2 -translate-y-2/4"
          >
            <FaChevronLeft />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute hidden  text-2xl sm:inline-block hover:bg-gray-100 transition-all duration-300  hover:bg-opacity-10 rounded-full text-fcg-50  top-2/4 !right-2 -translate-y-2/4"
          >
            <FaChevronRight />
          </IconButton>
        )}
        
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-10 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-fce-50" : "w-4 bg-white"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {HeroData.map((data, id) => (
          <div
            key={id}
            className="lg:h-screen  relative w-full bg-fce-50"
          >
            <img
              src={data.imageUrl}
              alt={data.imageUrl}
              className=" w-full opacity-80 object-cover h-[100%] "
            />
            <div className="lg:w-[50%] pl-1 w-[60%] flex flex-col gap-2 absolute top-1/3 left-3/4 -translate-y-1/2  text-black -translate-x-[80%] pop ">
              <h1 className="lg:text-4xl text-md font-bold w-[80%]">
                {data.Headline}
              </h1>
              <p className="w-[80%] text-xs lg:text-sm">{data.Description}</p>
              <p to={data.href}>
                {data.Button && "Claim Food" ? (
                  <Button
                    className="flex gap-1 items-center lg:py-2 py-1 bg-fce-50 text-fcg-800 rounded lg:rounded-md text-[8px] px-2 lg:px-3 lg:text-sm font-semibold"
                    // onClick={scrollToClaim}
                  >
                    {data.Button}
                    {data.icon}
                  </Button>
                ) : (
                  <Button className="flex gap-1 items-center py-1 bg-fce-50 text-fcg-50 rounded lg:rounded-md lg:py-2 text-[8px] px-2 lg:px-3 lg:text-sm font-semibold">
                    {data.Button}
                    {data.icon}
                  </Button>
                )}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
