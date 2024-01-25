import React from "react";
import CategoryData from "./CategoryData";

const Category = () => {
  return (
    <div className="bg-stone-100 dark:bg-gray-800 dark:text-white">
      <div className="container pt-16 px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {CategoryData.map((data) => (
            <div
              key={data.id}
              className="border border-gray-200 bg-white dark:bg-[#001F3F] cursor-pointer hover:border-gray-300 hover:scale-105 transition-transform rounded-lg"
            >
              <div className="flex justify-between items-center p-6">
                <div className="space-y-3">
                  <h1 className="font-medium text-xl">{data.name}</h1>
                  <p className="text-gray-500 dark:text-white">{data.count}</p>
                </div>
                <img
                  src={data.img}
                  alt="img"
                  className="w-24 h-24 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
