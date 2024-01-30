import React from "react";
import Hero from "../components/Hero";
import Category from "../components/Category";
import FruitSection from "../components/FruitSection";
import CakeSection from "../components/CakeSection";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const Home = ({ cart, setCart }) => {
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) {
        isPresent = true;
      }
    });
    if (isPresent) {
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <>
      <Hero handleClick={handleClick} />
      <Category />
      <FruitSection handleClick={handleClick} />
      <CakeSection handleClick={handleClick} />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
