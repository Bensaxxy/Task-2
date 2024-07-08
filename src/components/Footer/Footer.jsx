import React from "react";
import logo from "/images/logo.png";
import payment from "/images/Payment.png";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="my-10 hidden md:block">
      <div className=" rounded-xl gap-10 grid  py-10 lg:px-14 md:px-8 container bg-primary/20">
        <div className=" flex items-center justify-between md:gap-10 lg:gap-20">
          <img src={logo} className=" md:gap-2 md:w-[150px] lg:w-[250px]" />
          <div className=" flex w-full lg:flex-row md:flex-col justify-between lg:gap-16 rounded-xl py-6 lg:px-8 md:px-4 bg-primary">
            <div className=" text-white/80 flex flex-col gap-2">
              <h1 className=" text-xl text-white lg:text-2xl mb-2">Account</h1>
              <div className="flex lg:flex-col gap-2 md:flex-row">
                <a href="#">Wishlist</a>
                <a href="#">Cart</a>
                <a href="#">Track Order</a>
                <a href="#">Shopping Details</a>
              </div>
            </div>
            <div className=" text-white/80 flex flex-col gap-2">
              <h1 className=" text-xl text-white lg:text-2xl mb-2">
                Useful links
              </h1>
              <div className="flex lg:flex-col gap-2 md:flex-row">
                <a href="#">About Us</a>
                <a href="#">Contact</a>
                <a href="#">Hotdeals</a>
                <a href="#">Promotion</a>
                <a href="#">New products</a>
              </div>
            </div>
            <div className=" text-white/80 flex flex-col gap-2">
              <h1 className=" text-xl text-white lg:text-2xl mb-2">
                Help Center
              </h1>
              <div className="flex lg:flex-col gap-2 md:flex-row">
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
        <div className=" bg-primary rounded-full py-4 flex items-center justify-between container text-white/80">
          <div>
            <p>© 2024, All rights reserved</p>
          </div>
          <div>
            <img className=" md:w-[150px]" src={payment} />
          </div>
          <div className=" flex gap-2">
            <FaFacebookF className=" bg-black w-7 h-7 rounded-full p-[6px]" />
            <FaLinkedinIn className=" bg-black w-7 h-7 rounded-full p-[6px]" />
            <FaInstagram className=" bg-black w-7 h-7 rounded-full p-[6px]" />
            <FaTwitter className=" bg-black w-7 h-7 rounded-full p-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
