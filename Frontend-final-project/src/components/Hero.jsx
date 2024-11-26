import { Button, Carousel, IconButton } from "@material-tailwind/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaCar,
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
      icon: <FaSearch />,
      href: "/browse-cars",
    },
    {
      imageUrl: "/NavBg.png",
      Headline: "Flexible Leasing Options",
      Description:
        "Choose from short-term or long-term leasing options that suit your requirements.",
      Button: "Get Started",
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
    <div className="h-screen">
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
            className="!absolute hidden sm:inline-block text-2xl hover:bg-gray-100 transition-all duration-300 hover:bg-opacity-10 rounded-full text-fcg-50 top-2/4 !right-2 -translate-y-2/4"
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
          <div key={id} className="lg:h-screen relative w-full bg-fce-50">
            <img
              src={data.imageUrl}
              alt={data.imageUrl}
              className="w-full opacity-80 object-cover h-[100%]"
            />
            <div className="lg:w-[50%] w-[70%] absolute top-1/3 left-3/4 -translate-y-1/2 -translate-x-[80%] flex flex-col gap-4 text-black px-6 sm:px-12">
              <h1 className="lg:text-4xl text-xl font-bold w-full">
                {data.Headline}
              </h1>
              <p className="text-xs lg:text-sm">{data.Description}</p>
              <Button
                href={data.href}
                className="flex gap-2 items-center lg:py-2 py-1 bg-fce-50 text-fcg-800 rounded lg:rounded-md text-xs lg:text-sm font-semibold px-3"
              >
                {data.Button}
                {data.icon && <span className="text-lg">{data.icon}</span>}
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
