import React from "react";
import { LuMailOpen } from "react-icons/lu";

const NewsLetter = () => {
  return (
    <div className="bg-stone-100 dark:bg-gray-800 dark:text-white py-16">
      <div className="bg-[#001F3F] dark:bg-[#87CEEB] ">
        <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white dark:text-black">
          <div className="flex flex-shrink-0 gap-4 items-center">
            <LuMailOpen size={60} />
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold">
                Sign up to get latest update
              </h3>
              <p>...and to get discount on your first shopping</p>
            </div>
          </div>
          <div className="w-full max-w-lg relative">
            <input
              className="py-4 px-6 w-full rounded-full placeholder:text-sm"
              type="text"
              name="newsletter"
              placeholder="Your Email Address.."
            />
            <button className="bg-[#001F3F] dark:bg-[#87CEEB] hover:bg-[#87CEEB] dark:hover:bg-[#001F3F] hover:text-black dark:hover:text-white absolute top-1/2 right-2 -translate-y-1/2 py-2 px-4 rounded-full">
              Subscribe!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
