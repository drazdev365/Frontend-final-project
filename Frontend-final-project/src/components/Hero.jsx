import { Button, Carousel, IconButton } from "@material-tailwind/react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaCar,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export function Hero() {
  const HeroData = [
    {
      imageUrl: "/red-car.png",
      Headline: "Explore Cars That Match Your Style",
      Description:
        "Browse thousands of car listings with ease. Find the perfect car for your needs, from trusted sources and detailed information, all in one place.",
      Button: "Explore Listings",
      icon: <FaSearch />,
      href: "/browse", // Update this link to the actual listing page
    },
    {
      imageUrl: "/white-car.png",
      Headline: "Your Next Car is Just a Search Away!",
      Description:
      "Discover a variety of vehicles available for lease to meet your travel or business needs.",
      Button: "Find Your Car",
      icon: <FaCar />,
      href: "/browse",
    },
    // {
    //   imageUrl: "/NavBg.png",
    //   Headline: "Flexible Leasing Options",
    //   Description:
    //     "Choose from short-term or long-term leasing options that suit your requirements.",
    //   Button: "Get Started",
    //   href: "/get-started",
    // },
    // {
    //   imageUrl: "/NavBg.png",
    //   Headline: "Join Our Community",
    //   Description:
    //     "Become part of a trusted network of car owners and renters who prioritize convenience and reliability.",
    //   Button: "Sign Up",
    //   icon: <FaUsers />,
    //   href: "/signup",
    // },
  ];

  return (
    <>
      <Carousel
        loop={true}
        autoplay={true}
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute hidden  sm:inline-block hover:bg-gray-100 transition-all duration-300 rounded-full hover:bg-opacity-10 text-2xl bg-gray-200  text-black top-2/4 left-2 -translate-y-2/4"
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
            className="!absolute hidden sm:inline-block text-2xl hover:bg-gray-100 transition-all duration-300 hover:bg-opacity-10 rounded-full text-black bg-gray-100/50 top-2/4 !right-2 -translate-y-2/4"
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
                  activeIndex === i ? "w-8 bg-primary-100" : "w-4 bg-black"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {HeroData.map((data, id) => (
          <div key={id} className="lg:h-[85dvh]  h-[280px] overflow-hidden relative w-full bg-white">
            <img
              src={data.imageUrl}
              alt={data.imageUrl}
              className={`w-1/2 bottom-0 absolute right-0 object-cover ${data.imageUrl === "/white-car.png" ? "bottom-[10%]" : "-bottom-[10%]"}`}
            />
            <div className="lg:w-[40%] w-[70%] absolute top-[40%] left-[56%] lg:left-[40%] -translate-y-1/2 -translate-x-[80%] flex flex-col gap-4 text-black px-6 sm:px-12">
              <h1 className="lg:text-4xl text-xl font-bold w-full">
                {data.Headline}
              </h1>
              <p className="text-xs lg:text-sm">{data.Description}</p>
              <Link
                to={data.href}
                className="flex gap-2 hover:bg-primary-100/95 hover:shadow-sm bg-primary-100 w-fit items-center lg:py-2 py-1 bg-fce-50 text-white rounded lg:rounded-md text-xs lg:text-sm cursor-pointer font-semibold px-3"
              >
                {data.Button}
                {data.icon && <span className="text-lg">{data.icon}</span>}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}
