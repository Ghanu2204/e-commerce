import React from "react";

const Payment = () => {
  return (
    <>
      <div className="p-2">
        <h1 className="text-4xl font-semibold text-center my-2 underline">
          Checkout
        </h1>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl text-gray-500 font-serif">
          Contact information
        </h1>
        <form className="flex flex-col gap-5">
          <div className="flex gap-2">
            <input
              className="border border-black shadow-lg rounded-md p-2"
              type="text"
              placeholder="First Name *"
              required
            />
            <input
              className="border border-black shadow-lg rounded-md p-2"
              type="text"
              placeholder="Last Name *"
              required
            />
          </div>
          <div>
            <input
              className="border border-black shadow-lg rounded-md p-2 w-full"
              type="tel"
              placeholder="Contact number *"
              required
              maxLength={10}
              minLength={10}
            />
          </div>
          <div>
            <input
              className="border border-black shadow-lg rounded-md p-2 w-full"
              type="email"
              placeholder="Email ID *"
              required
            />
          </div>
          <div>
            <textarea
              className="border border-black shadow-lg rounded-md p-2 w-full"
              rows={3}
              cols={20}
              placeholder="Address *"
            />
          </div>
          <div>
            <input
              className="border border-black shadow-lg rounded-md p-2 w-full"
              type="text"
              placeholder="Pincode *"
              pattern="[0-9]{6}"
              required
            />
          </div>
          <button
            className="bg-gradient-to-r from-[#0023FF] to-[#3342a1] transition-all duration-200 pl-4 py-1 text-white rounded-full flex items-center w-1/5"
            type="submit"
          >
            Order
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
