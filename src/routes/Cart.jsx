import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.price * item.amount));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
  };

  const handleChange = (item, change) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) {
        ind = index;
      }
    });
    const tempArr = cart;
    tempArr[ind].amount += change;
    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr]);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="bg-stone-100 dark:bg-gray-800 dark:text-white duration-200 h-[87vh] sm:h-[93vh]">
      <div className="flex justify-center py-4">
        <h1 className="font-bold text-3xl underline">Your Cart</h1>
      </div>
      <div className="w-full md:w-2/3 mx-auto p-6">
        {cart?.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between pb-1 my-3 border-b-2 border-[#001F3F]"
          >
            <div className="flex justify-between items-center w-1/3 ">
              <img
                className="size-14 sm:size-20 lg:size-28 xl:size-32"
                src={item.img}
                alt="image"
              />
              <p className="font-semibold whitespace-nowrap lg:text-xl">
                {item.name}
              </p>
            </div>
            <div className="flex gap-1 lg:text-xl">
              <button
                onClick={() => handleChange(item, -1)}
                className="p-1 font-bold "
              >
                -
              </button>
              <button className="cursor-default">{item.amount}</button>
              <button
                onClick={() => handleChange(item, +1)}
                className="px-2 py-1 font-bold "
              >
                +
              </button>
            </div>
            <div>
              <span className="font-semibold lg:text-xl">₹{item.price}</span>
            </div>
            <div>
              <button
                onClick={() => handleRemove(item.id)}
                className="bg-gradient-to-r from-[#0023FF] to-[#3342a1] text-white hover:scale-105 rounded-full p-1"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        <div className="flex flex-col sm:flex-row justify-between text-xl xl:text-2xl font-bold">
          <div className="flex items-center gap-2">
            <span>Total Price of Your Cart :-</span>
            <span>₹{price}</span>
          </div>
          <Link to="/payment" className="bg-[#87CEEB] dark:bg-[#001F3F] text-center rounded-full px-2 font-medium">
            Payment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
