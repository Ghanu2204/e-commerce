import React, { useEffect, useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import Swal from "sweetalert2";

const Payment = ({ cart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.price * item.amount));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    contact: "",
    email: "",
    address: "",
    pincode: "",
    paymentMethod: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOrderClick = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        title: "Thank you!",
        text: "Your order has been placed",
        icon: "success",
        confirmButtonText: `<a href="/">Done</a>`,
      });
    } else {
      Swal.fire({
        title: "Oops...",
        text: "Please fill out all required fields correctly.",
        icon: "error",
      });
    }
  };

  const validateForm = () => {
    const { fName, lName, contact, email, address, pincode, paymentMethod } =
      formData;
    return (
      fName.trim() !== "" &&
      lName.trim() !== "" &&
      contact.trim().length === 10 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      address.trim() !== "" &&
      /^\d{6}$/.test(pincode) &&
      paymentMethod !== ""
    );
  };

  return (
    <>
      <div className="px-3 flex flex-col gap-3 lg:w-2/3 mx-auto">
        <div className="p-2">
          <h1 className="text-4xl font-semibold text-center my-4 underline">
            Checkout
          </h1>
        </div>
        <div className="flex w-full flex-col p-3 mx-auto bg-slate-100 ">
          <h1 className="text-2xl text-gray-500 font-serif mx-auto">
            Your Order
          </h1>
          {cart.map((item) => (
            <div key={item.id} className="flex border-b-2 border-[#001F3F]">
              <div className="flex justify-between items-center w-full ">
                <img
                  className="size-14 sm:size-20 lg:size-28 xl:size-32"
                  alt="image"
                  src={item.img}
                />
                <p className="font-semibold whitespace-nowrap lg:text-xl">
                  {item.name}
                </p>
                <p>Qty. {item.amount}</p>
                <p className="font-semibold lg:text-xl">₹{item.price}</p>
              </div>
            </div>
          ))}
          <div className="flex justify-evenly items-center gap-2 text-sm md:text-base lg:text-xl font-semibold">
            <span>Total Price of Your Cart</span>
            <span>₹{price}</span>
          </div>
        </div>
        <div>
          <form className="flex flex-col md:flex-row mb-5 gap-9 md:gap-[4%]">
            <div className="flex flex-col md:w-[48%] items-center gap-3">
              <h1 className="text-2xl text-gray-500 font-serif">
                Shipping details
              </h1>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-col md:flex-row gap-5 md:gap-2">
                  <input
                    className="border border-black shadow-lg w-full md:w-1/2 rounded-md p-2"
                    name="fName"
                    type="text"
                    placeholder="First Name *"
                    required
                    value={formData.fName}
                    onChange={handleInputChange}
                  />
                  <input
                    className="border border-black shadow-lg w-full md:w-1/2 rounded-md p-2"
                    name="lName"
                    type="text"
                    placeholder="Last Name *"
                    required
                    value={formData.lName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    className="border border-black shadow-lg rounded-md p-2 w-full"
                    name="contact"
                    type="tel"
                    placeholder="Contact number *"
                    required
                    maxLength={10}
                    minLength={10}
                    value={formData.contact}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    className="border border-black shadow-lg rounded-md p-2 w-full"
                    name="email"
                    type="email"
                    placeholder="Email ID *"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <textarea
                    className="border border-black shadow-lg rounded-md p-2 w-full"
                    name="address"
                    rows={3}
                    cols={20}
                    placeholder="Address *"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <input
                    className="border border-black shadow-lg rounded-md p-2 w-full"
                    name="pincode"
                    type="text"
                    placeholder="Pincode *"
                    pattern="[0-9]{6}"
                    required
                    value={formData.pincode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-[48%] mb-5 flex flex-col  items-center justify-start gap-10">
              <h1 className="text-2xl text-gray-500 font-serif">
                Payment method
              </h1>
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex justify-between border border-black shadow-lg rounded-md p-2 w-full md:w-2/3">
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="paymentMethod"
                      required
                      onChange={handleInputChange}
                    />
                    <p className="font-semibold">Cash on delivery</p>
                  </div>
                  <BsCashCoin size={30} />
                </div>

                <p className="text-xs lg:text-sm">
                  By clicking the button, you agree to the{" "}
                  <span className="underline">Terms & Conditions</span> .
                </p>
                <div className="w-3/4 flex items-center">
                  <button
                    onClick={handleOrderClick}
                    className="bg-gradient-to-r from-[#0023FF] to-[#3342a1] transition-all duration-200 px-4 py-3 text-white justify-center flex w-full"
                    type="submit"
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Payment;
