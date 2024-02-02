import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/logo-1.png";
import { IoSearch, IoCartSharp } from "react-icons/io5";
import { FaBars, FaXmark } from "react-icons/fa6";
import Menu from "./Menu";
import Dark from "./Dark";

const Navbar = ({ size }) => {
  let [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    let handler = () => {
      setisOpen(false);
    };
    document.addEventListener("mousedown", handler);
  });

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="bg-[#87CEEB] dark:bg-[#001F3F] py-2">
        <div className="flex justify-between items-center px-2 md:px-4">
          <div>
            <Link
              to="/"
              className="font-semibold  text-2xl sm:text-3xl flex gap-2"
            >
              <img alt="Logo" src={Logo} className="size-10 " />
              Buyify
            </Link>
          </div>
          <div className="flex justify-center">
            <ul
              className={`flex flex-col md:flex-row bg-[#c5efff] md:bg-transparent dark:bg-[#1f2c3a] dark:md:bg-transparent absolute md:relative items-end right-0 md:top-0 md:items-center whitespace-nowrap rounded-md
              md:z-auto z-10 transition-all duration-300 px-4 w-1/3 h-80 md:h-auto justify-evenly ease-in-out gap-2 lg:gap-4
               ${isOpen ? "top-14" : "-top-96"}`}
            >
              {Menu.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="md:hover:text-white dark:md:hover:text-black md:hover:bg-[#001F3F]
                     dark:md:hover:bg-[#87CEEB] rounded-full p-1"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="w-36 lg:w-48 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1
                 focus:outline-none focus:border-1 focus:border-[#0023FF]"
              />
              <IoSearch className="text-gray-500 group-hover:text-[#0023FF] absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <Link
              to="/cart"
              className="cart bg-gradient-to-r from-[#0023FF] to-[#3342a1] transition-all duration-200 pl-4 py-1
               text-white rounded-full flex items-center"
            >
              <span>
                <IoCartSharp className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </span>
              <span>{size}</span>
            </Link>
            <div>
              <Dark />
            </div>
            <div
              onClick={() => setisOpen(!isOpen)}
              className="cursor-pointe md:hidden"
            >
              {isOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-center relative py-2 sm:hidden">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className={`w-48 transition-all duration-300 rounded-full border border-gray-300 px-2 focus:outline-none
             focus:border-1 focus:border-[#0023FF] placeholder:text-sm placeholder:text-[#8795ff] 
             ${isOpen ? "-z-20" : "z-0"}`}
          />
          <IoSearch
            className={`text-gray-500 top-1/2 translate-y-1/3 -translate-x-7 
            ${isOpen ? "-z-20" : "z-0"}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
