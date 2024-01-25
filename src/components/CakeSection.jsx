import React from "react";
import CakeSectionData from "./CakeSectionData";
import banner from "../assets/CakeSection/banner.jpg";

const CakeSection = ({ handleClick }) => {
  const [first, second, third, forth] = CakeSectionData;
  return (
    <div className="bg-stone-100 dark:bg-gray-800 dark:text-white">
      <div className="container pt-16 px-4">
        <div className="lg:flex justify-between items-center">
          <div>
            <h3 className="font-medium text-2xl">Cake, Bakery & Dairy</h3>
            <p className="text-gray-600 dark:text-white mt-2">
              Buy best quality cake, dairy product and bakery product online at
              the best price.
            </p>
          </div>
          <div className="space-x-4 mt-8 lg:mt-0">
            <button className="px-4 py-1 rounded-full hover:text-[#001F3F] focus:bg-[#001F3F] focus:text-white dark:focus:text-black dark:focus:bg-[#87CEEB] dark:hover:text-[#87CEEB]">
              Cake
            </button>
            <button className="px-4 py-1 rounded-full hover:text-[#001F3F] focus:bg-[#001F3F] focus:text-white dark:focus:text-black dark:focus:bg-[#87CEEB] dark:hover:text-[#87CEEB]">
              Bread & Bakery
            </button>
            <button className="px-4 py-1 rounded-full hover:text-[#001F3F] focus:bg-[#001F3F] focus:text-white dark:focus:text-black dark:focus:bg-[#87CEEB] dark:hover:text-[#87CEEB]">
              Dairy
            </button>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
          <div>
            <img
              className="w-full h-5/6 object-cover"
              alt="image"
              src={banner}
            />
          </div>
          {CakeSectionData.map((data) => (
            <div
              key={data.id}
              className="bg-white dark:bg-[#001F3F] group border h-5/6 border-gray-200 hover:border-gray-300 transition-transform rounded-lg relative"
            >
              <img
                className="h-3/5 group-hover:scale-105 mx-auto"
                alt="image"
                src={data.img}
              />
              <div className="flex flex-col items-center space-y-2 relative h-5/5 px-4 md:px-1">
                <h3 className="font-medium text-xl md:text-base lg:text-lg">
                  {data.name}
                </h3>
                <h3 className="text-2xl md:text-base lg:text-xl font-medium ">
                ₹{data.price}
                </h3>
                <button
                  onClick={() => handleClick(data)}
                  className=" bg-gradient-to-r from-[#0023FF] to-[#3342a1] hover:scale-105 duration-200
                text-white py-1 px-4 rounded-full whitespace-nowrap"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeSection;
