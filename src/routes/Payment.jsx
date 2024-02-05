import React, { useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import Swal from "sweetalert2";

const Payment = () => {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    contact: "",
    email: "",
    address: "",
    pincode: "",
    // payment: "",
  });

  const [validationMessages, setValidationMessages] = useState({
    fName: "",
    lName: "",
    contact: "",
    email: "",
    address: "",
    pincode: "",
    // payment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOrderClick = () => {
    // Validation logic
    const messages = {};
    let isValid = true;

    for (const key in formData) {
      if (!formData[key]) {
        messages[key] = "";
        isValid = false;
      }
    }
    
    setValidationMessages(messages);

    if (isValid) {
      Swal.fire({
        title: "Thank you!",
        text: "Your order has been placed",
        icon: "success",
        confirmButtonText: `<a href="/">Done</a>`,
      });
    }
  };

  return (
    <>
      <div className="py-6 px-32">
        <div className="p-2">
          <h1 className="text-4xl font-semibold text-center my-2 underline">
            Checkout
          </h1>
        </div>
        <div>
          <form className="flex gap-[4%]">
            <div className="flex flex-col w-[48%] items-center gap-3">
              <h1 className="text-2xl text-gray-500 font-serif">
                Shipping details
              </h1>
              <div className="flex flex-col gap-5">
                <div className="flex gap-2">
                  <input
                    className="border border-black shadow-lg rounded-md p-2"
                    name="fName"
                    type="text"
                    placeholder="First Name *"
                    required
                    onChange={handleInputChange}
                  />
                  {validationMessages.fName && (
                    <p className="text-red-500">{validationMessages.fName}</p>
                  )}
                  <input
                    className="border border-black shadow-lg rounded-md p-2"
                    name="lName"
                    type="text"
                    placeholder="Last Name *"
                    required
                    onChange={handleInputChange}
                  />
                  {validationMessages.lName && (
                    <p className="text-red-500">{validationMessages.lName}</p>
                  )}
                </div>
                <div>
                  <input
                    className="border border-black shadow-lg rounded-md p-2 w-full"
                    name="contact"
                    type="tel"
                    placeholder="Contact number *"
                    required
                    onChange={handleInputChange}
                    maxLength={10}
                    minLength={10}
                  />
                  {validationMessages.contact && (
                    <p className="text-red-500">{validationMessages.contact}</p>
                  )}
                </div>
                <div>
                  <input
                    className="border border-black shadow-lg rounded-md p-2 w-full"
                    name="email"
                    type="email"
                    placeholder="Email ID *"
                    required
                    onChange={handleInputChange}
                  />
                  {validationMessages.email && (
                    <p className="text-red-500">{validationMessages.email}</p>
                  )}
                </div>
                <div>
                  <textarea
                    className="border border-black shadow-lg rounded-md p-2 w-full"
                    name="address"
                    rows={3}
                    cols={20}
                    placeholder="Address *"
                    required
                    onChange={handleInputChange}
                  />
                  {validationMessages.address && (
                    <p className="text-red-500">{validationMessages.address}</p>
                  )}
                </div>
                <div>
                  <input
                    className="border border-black shadow-lg rounded-md p-2 w-full"
                    name="pincode"
                    type="text"
                    placeholder="Pincode *"
                    pattern="[0-9]{6}"
                    required
                    onChange={handleInputChange}
                  />
                  {validationMessages.pincode && (
                    <p className="text-red-500">{validationMessages.pincode}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-[48%] flex flex-col items-center justify-start gap-10">
              <h1 className="text-2xl text-gray-500 font-serif">
                Payment method
              </h1>
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="flex justify-between border border-black shadow-lg rounded-md p-2 w-2/3">
                  <div className="flex gap-3">
                    <input
                      type="radio"
                      name="payment"
                      required
                      
                    />
                    <p className="font-semibold">Cash on delivery</p>
                  </div>
                  <BsCashCoin size={30} />
                </div>
                
                <p className="text-sm">
                  By clicking the button, you agree to the{" "}
                  <span className="underline">Terms & Conditions</span> .
                </p>
                <div className="w-3/4 flex items-center">
                  <button
                    onClick={handleOrderClick}
                    className="bg-gradient-to-r from-[#0023FF] to-[#3342a1] transition-all duration-200 px-4 py-3 text-white justify-center flex w-full"
                    type="button"
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
