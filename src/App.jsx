import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderOne from "./components/Header/HeaderOne";
import HeaderTwo from "./components/Header/HeaderTwo";
import HeaderThree from "./components/Header/HeaderThree";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart"; // Import the Cart component
import Footer from "./components/Footer/Footer";
import MobileFooter from "./components/Footer/MobileFooter";

const App = () => {
  const HomeWithHeaderThree = () => (
    <>
      <HeaderThree />
      <Home />
    </>
  );
  return (
    <div className=" font-primary">
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
    </div>
  );
};

export default App;
