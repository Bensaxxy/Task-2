import React, { useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const [showUserOptions, setShowUserOptions] = useState(false);

  const handleCartClick = () => {
    navigate("/cart");
  };

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  return (
    <div className="my-4">
      <div className="container flex items-center justify-between">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="hidden md:flex md:w-40 lg:w-52"
            />
            <img src={logo2} alt="Logo" className="w-[24px] md:hidden" />
          </Link>
        </div>
        <div className="flex items-center gap-1 md:gap-6">
          <div className="border flex items-center gap-1 md:gap-3 border-primary md:py-2 py-1 md:px-2 px-1 rounded-lg">
            <div className="flex gap-1 md:gap-3 items-center">
              <FaSearch />
              <input
                type="text"
                placeholder="Smart Televisions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="outline-none w-[90px] md:w-full text-sm md:text-md lg:text-lg"
                aria-label="Search for products"
              />
            </div>
            <IoCloseOutline
              size={20}
              className="cursor-pointer"
              onClick={() => setSearchQuery("")}
            />
          </div>
          <button
            className="bg-black md:py-2 text-sm md:text-md lg:text-lg py-1 md:px-8 px-4 rounded-lg text-white"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-1 md:gap-2">
            <CiHeart size={20} />
            <p className="hidden md:flex">Favorites</p>
          </div>
          <div
            onClick={handleCartClick}
            className="flex items-center gap-1 md:gap-2 cursor-pointer"
          >
            <AiOutlineShoppingCart size={20} />
            <p className="hidden md:flex">Cart</p>
          </div>
          <div className="relative flex items-center gap-1 md:gap-2">
            <img
              className="w-6 md:hidden cursor-pointer"
              src={avatar}
              alt="User avatar"
              onClick={() => setShowUserOptions(!showUserOptions)}
            />
            <p className="hidden md:flex cursor-pointer">Chika</p>
            <img
              className="w-2 md:w-5 cursor-pointer"
              src={secondArrow}
              alt="Arrow"
            />
            {showUserOptions && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
