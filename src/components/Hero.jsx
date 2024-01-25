import React from "react";
import Slider from "react-slick";
import Image1 from "../assets/hero/hero-1.png";
import Image2 from "../assets/hero/hero-2.png";
import Image3 from "../assets/hero/hero-3.png";

const ImageList = [
  {
    id: 0,
    img: Image1,
    name: "Dried Fruits",
    price: "744",
    amount: 1,
  },
  {
    id: 1,
    img: Image2,
    name: "Pizza",
    price: "237",
    amount: 1,
  },
  {
    id: 2,
    img: Image3,
    name: "Chips",
    price: "27",
    amount: 1,
  },
];
const [ first, second, third ] = ImageList;

const Hero = ({ handleClick }) => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div
      className="relative overflow-hidden min-h-[550px] sm:min-h-[550px]
     bg-stone-100 flex justify-center items-center dark:bg-gray-800 
     dark:text-white duration-200"
    >
      <div className="bg-[url('./assets/hero/bg.png')] w-[95%] ">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div
                    className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2
                     sm:order-1 relative z-10"
                  >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                      {data.name}
                    </h1>
                    <p className="text-3xl font-semibold">
                      Starting at ₹{data.price}
                    </p>
                    <div>
                      <button
                        onClick={() => handleClick(data)}
                        className="bg-gradient-to-r from-[#0023FF] to-[#3342a1] hover:scale-105 duration-200
                         text-white py-2 px-4 rounded-full"
                      >
                        Shop now
                      </button>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img
                        alt="Image"
                        src={data.img}
                        className="w-72 h-72 sm:w-[450px] sm:h-[450px] sm:scale-125 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
