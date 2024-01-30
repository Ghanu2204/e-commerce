import React, { useState } from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./routes/Cart";
import Home from "./routes/Home";

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      </Routes>
    </div>
  );
};

export default App;