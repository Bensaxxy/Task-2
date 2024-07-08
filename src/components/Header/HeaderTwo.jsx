import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/images/logo.png";
import logo2 from "/images/logo2.png";
import avatar from "/images/avatar.png";
import secondArrow from "/images/secondArrow.png";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";

const HeaderTwo = () => {
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <div className="my-4">
      <div className=" container flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} className=" hidden md:flex md:w-40 lg:w-52" />
            <img src={logo2} className=" w-[24px] md:hidden" />
          </Link>
        </div>
        <div className="flex items-center gap-1 md:gap-6">
          <div className="border flex items-center gap-1 md:gap-3 border-primary md:py-2 py-1 md:px-2 px-1 rounded-lg">
            <div className=" flex gap-1 md:gap-3 items-center">
              <FaSearch />
              <input
                type="text"
                placeholder="Smart Televisions"
                className=" outline-none w-[90px] md:w-full text-sm md:text-md lg:text-lg"
              />
            </div>
            <IoCloseOutline size={20} className=" cursor-pointer" />
          </div>
          <button className=" bg-black md:py-2 text-sm md:text-md lg:text-lg py-1 md:px-8 px-4 rounded-lg text-white">
            Search
          </button>
        </div>
        <div className="flex gap-2">
          <div className=" flex items-center gap-1 md:gap-2">
            <CiHeart size={20} />
            <p className="hidden md:flex">Favorites</p>
          </div>
          <div
            onClick={handleCartClick}
            className=" flex items-center gap-1 md:gap-2 cursor-pointer"
          >
            <AiOutlineShoppingCart size={20} />
            <p className="hidden md:flex">Cart</p>
          </div>
          <div className=" flex items-center gap-1 md:gap-2">
            <img className=" w-6 md:hidden" src={avatar} />
            <p className=" hidden md:flex">Chika</p>
            <img className=" w-2 md:w-5" src={secondArrow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
