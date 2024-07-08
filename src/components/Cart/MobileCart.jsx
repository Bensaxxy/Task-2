import React from "react";
import tv from "/images/Frame (2).png";
import { RiDeleteBin6Line } from "react-icons/ri";

const MobileCart = () => {
  return (
    <div>
      <div className="container p-6">
        <div className=" bg-primary/20 flex items-center justify-center  p-8 rounded-md">
          <img src={tv} />
        </div>
        <h1 className=" font-bold text-[18px] md:text-[18px] ">
          UFC 43” Inches 4k UHD Smart TV{" "}
        </h1>
        <p className="text-primary text-sm my-3">Black Color</p>
        <div className=" flex justify-between">
          <div className=" px-4 justify-center w-full max-w-[120px] flex items-center gap-4 border border-primary/10 text-lg">
            <button>+</button>
            <p>1</p>
            <button>-</button>
          </div>
          <div>
            <h1 className=" font-semibold text-black text-lg mb-4">
              NG100,000
            </h1>
            <div className=" flex items-center justify-center rounded-md bg-red-200 py-1 px-3 border border-red-500 text-red-500 gap-2">
              <button className="hidden md:flex">Delete</button>
              <RiDeleteBin6Line />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCart;
