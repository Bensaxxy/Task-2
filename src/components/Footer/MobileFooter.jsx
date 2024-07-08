import React from "react";
import logo from "/images/logo2.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const MobileFooter = () => {
  return (
    <div className=" my-10 container md:hidden">
      <div className=" px-2 bg-primary/20 py-4 rounded-2xl ">
        <div className=" bg-primary rounded-full py-4 flex mb-4 items-center justify-between container text-white/80">
          <div>
            <img className="w-[30px]" src={logo} />
          </div>
          <div>
            <p className=" text-[10px]">© 2024, All rights reserved</p>
          </div>
          <div className=" flex gap-2">
            <FaFacebookF className=" bg-black w-5 h-5 rounded-full p-[4px]" />
            <FaLinkedinIn className=" bg-black w-5 h-5 rounded-full p-[4px]" />
            <FaInstagram className=" bg-black w-5 h-5 rounded-full p-[4px]" />
            <FaTwitter className=" bg-black w-5 h-5 rounded-full p-[4px]" />
          </div>
        </div>
        <div className=" flex w-full flex-col justify-between gap-2 rounded-2xl py-6 px-4 bg-primary">
          <div className=" text-white/80 flex flex-col gap-2">
            <h1 className=" text-lg text-white mb-2">Account</h1>
            <div className="flex gap-2 text-[11px]">
              <a href="#">Wishlist</a>
              <a href="#">Cart</a>
              <a href="#">Track Order</a>
              <a href="#">Shopping Details</a>
            </div>
          </div>
          <div className=" text-white/80 flex flex-col gap-2">
            <h1 className=" text-lg text-white lg:text-2xl mb-2">
              Useful links
            </h1>
            <div className="flex gap-2 text-[11px]">
              <a href="#">About Us</a>
              <a href="#">Contact</a>
              <a href="#">Hotdeals</a>
              <a href="#">Promotion</a>
              <a href="#">New products</a>
            </div>
          </div>
          <div className=" text-white/80 flex flex-col gap-2 text-[11px]">
            <h1 className=" text-lg text-white mb-2">Help Center</h1>
            <div className="flex gap-2 md:flex-row">
              <a href="#">Payments</a>
              <a href="#">Refund</a>
              <a href="#">Checkout</a>
              <a href="#">Shopping</a>
              <a href="#" className=" font-bold">
                Q&A
              </a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
