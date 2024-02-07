import React, { useState } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./routes/Cart";
import Home from "./routes/Home";
import Payment from "./routes/payment";
import ContactUs from "./routes/ContactUs";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/payment" element={<Payment cart={cart} />} />
      </Routes>
    </div>
  );
};

export default App;
