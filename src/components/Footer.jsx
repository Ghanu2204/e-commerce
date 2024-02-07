import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPhone,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/logo/logo-1.png";

const Footer = () => {
  return (
    <div className="bg-stone-100 dark:bg-gray-800 dark:text-white">
      <div className=" bg-[#87CEEB] dark:bg-[#001F3F] px-2 sm:px-8 sm:pt-8">
        <div className="">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0">
            <div className="flex sm:flex-col justify-between items-center sm:w-1/3 sm:justify-evenly">
              <a
                href="/"
                className="font-semibold  text-2xl sm:text-3xl flex items-center gap-2"
              >
                <img alt="Logo" src={logo} className="size-10 " />
                Buyify
              </a>
              <div className="flex gap-2 items-center ">
                <FaFacebook className="text-xl md:text-2xl cursor-pointer hover:text-[#001F3F] dark:hover:text-[#87CEEB]" />
                <FaInstagram className="text-xl md:text-2xl cursor-pointer hover:text-[#001F3F] dark:hover:text-[#87CEEB]" />
                <FaXTwitter className="text-xl md:text-2xl cursor-pointer hover:text-[#001F3F] dark:hover:text-[#87CEEB]" />
                <FaYoutube className="text-xl md:text-2xl cursor-pointer hover:text-[#001F3F] dark:hover:text-[#87CEEB]" />
              </div>
            </div>
            <div className="flex items-start justify-between sm:w-2/3 sm:justify-evenly">
              <div className="flex flex-col items-start gap-2 md:gap-4">
                <h1 className="text-xl font-medium md:text-2xl">
                  Important Links
                </h1>
                <div className="flex flex-col items-start">
                  <a
                    href="#"
                    className="text-base font-normal hover:text-[#001F3F] dark:hover:text-[#87CEEB]"
                  >
                    Fruits & Vegetables
                  </a>
                  <a
                    href="#"
                    className="text-base font-normal hover:text-[#001F3F] dark:hover:text-[#87CEEB]"
                  >
                    Bread & Bakery
                  </a>
                  <a
                    href="#"
                    className="text-base font-normal hover:text-[#001F3F] dark:hover:text-[#87CEEB]"
                  >
                    Dairy Products
                  </a>
                  <a
                    href="#"
                    className="text-base font-normal hover:text-[#001F3F] dark:hover:text-[#87CEEB]"
                  >
                    Snacks & Cookies
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-start gap-2 md:gap-4">
                <h1 className="text-xl font-medium md:text-2xl">Contact Us</h1>
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2">
                    <FaPhone />
                    <a
                      href="tel:+919825789310"
                      className="text-base font-normal hover:text-[#001F3F] dark:hover:text-[#87CEEB]"
                    >
                      +91-9825789310
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoMdMail />
                    <a
                      href="mailto:contact@buyify.in"
                      className="text-base font-normal hover:text-[#001F3F] dark:hover:text-[#87CEEB]"
                    >
                      contact@buyify.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div className="flex items-center justify-center sm:py-4">
          <p className="mx-auto ">
            Copyright © 2024 Buyify Grocery Supplies Pvt Ltd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
