import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderOne from "./components/Header/HeaderOne";
import HeaderTwo from "./components/Header/HeaderTwo";
import HeaderThree from "./components/Header/HeaderThree";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart"; // Import the Cart component
import Footer from "./components/Footer/Footer";
import MobileFooter from "./components/Footer/MobileFooter";
import { CartProvider } from "./components/Home/CartContext"; // Import the CartProvider

const App = () => {
  const HomeWithHeaderThree = () => (
    <>
      <HeaderThree />
      <Home />
    </>
  );

  return (
    <div className="font-primary">
      <CartProvider>
        <Router>
          <HeaderOne />
          <HeaderTwo />
          <Routes>
            <Route path="/" element={<HomeWithHeaderThree />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
          <MobileFooter />
        </Router>
      </CartProvider>
    </div>
  );
};

export default App;
