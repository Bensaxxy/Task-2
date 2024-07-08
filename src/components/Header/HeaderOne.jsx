import React from "react";
import phone from "/images/Vector.png";
import downArrow from "/images/Vector (1).png";
import flag from "/images/flag.png";

const HeaderOne = () => {
  return (
    <>
      <div className=" bg-primary py-3 text-white text-[9px] md:text-[16px]">
        <div className=" container flex items-center justify-between">
          <div className=" flex gap-1 md:gap-2 items-center">
            <img className=" w-2 md:w-4" src={phone} />
            <p>+234810000234</p>
          </div>
          <div className="flex items-center gap-2">
            <button>Get 50% Off Selected Items</button>
            <button className=" text-nutural">Shop Now</button>
          </div>
          <div className=" flex gap-4 md:gap-8">
            <div className=" flex items-center gap-2">
              <p>EN</p>
              <img src={downArrow} className=" w-4" />
            </div>
            <div className=" flex items-center gap-1 md:gap-2">
              <img src={flag} className=" w-3 md:w-4" />
              <p className=" hidden md:flex">Nigeria</p>
              <img src={downArrow} className=" w-3 md:w-4" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderOne;
