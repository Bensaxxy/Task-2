import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import frame from "/images/Frame (1).png";
const HeaderThree = () => {
  return (
    <div>
      <div className=" container gap-2 flex items-center text-primary justify-center">
        <img src={frame} className=" w-10 md:w-[58px]" />
        <div className=" grid gap-1 grid-cols-4 md:grid-cols-8 items-center md:gap-4">
          <div className=" flex items-center border rounded-md text-sm border-primary px-2 md:gap-1">
            <p>Category</p>
            <MdKeyboardArrowDown size={24} />
          </div>
          <div className=" flex items-center border rounded-md text-sm border-primary px-2 md:gap-1">
            <p>Brand</p>
            <MdKeyboardArrowDown size={24} />
          </div>
          <div className=" flex items-center border rounded-md text-sm border-primary px-2 md:gap-1">
            <p>Features</p>
            <MdKeyboardArrowDown size={24} />
          </div>
          <div className=" flex items-center border rounded-md text-sm border-primary px-2 md:gap-1">
            <p>Color</p>
            <MdKeyboardArrowDown size={24} />
          </div>
          <div className=" flex items-center border rounded-md text-sm border-primary px-2 md:gap-1">
            <p>Inches</p>
            <MdKeyboardArrowDown size={24} />
          </div>
          <div className=" flex items-center border rounded-md text-sm border-primary px-2 md:gap-1">
            <p>Price</p>
            <MdKeyboardArrowDown size={24} />
          </div>
          <div className="w-full flex items-center border rounded-md text-sm border-primary px-2 md:gap-1">
            <p>Release Date</p>
            <MdKeyboardArrowDown size={24} />
          </div>
          <div className="w-full flex items-center border rounded-md text-sm border-primary px-2 md:gap-1">
            <p>Discount Deals</p>
            <MdKeyboardArrowDown size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderThree;
