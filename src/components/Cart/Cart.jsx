import React from "react";
import tv from "/images/Frame (2).png";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { MdKeyboardArrowRight } from "react-icons/md";
import MobileCart from "./MobileCart";

const homeItems = [
  {
    id: "1",
    image: tv,
    title: "UFC 43” Inches 4k UHD Smart TV",
    subtitle:
      "Android Smart TV, is an easier way to the entertainment you love.",
    amount: "NGN 100,000",
    addToCart: "Add to cart",
  },
];

const Cart = () => {
  return (
    <div className=" my-20">
      <div className=" container">
        <h1 className=" text-black font-semibold text-3xl my-10">Cart</h1>
        <div className=" border border-primary/10 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between">
          <div className=" block lg:hidden">
            <MobileCart />
          </div>
          <div className="hidden lg:flex lg:col-span-2 justify-between py-8 px-4 items-center flex-col lg:flex-row gap-6">
            <div className=" bg-primary/30  p-4 rounded-md">
              <img src={tv} className=" w-[160px]" />
            </div>
            <div className=" flex flex-col">
              <h1 className=" font-bold text-[12px] md:text-[18px] lg:text-[20px]">
                UFC 43” Inches 4k UHD Smart TV{" "}
              </h1>
              <p className="text-primary text-sm my-2">Black Color</p>
              <div className=" w-full max-w-24 p-1 justify-center flex items-center gap-4 border border-primary/10 text-lx">
                <button>+</button>
                <p>1</p>
                <button>-</button>
              </div>
            </div>
            <div>
              <h1 className=" font-semibold text-black text-2xl mb-4">
                NG100,000
              </h1>
              <button className=" flex items-center justify-center rounded-md bg-red-200 py-1 px-4 border border-red-500 text-red-500 gap-2">
                Delete
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
          <div className=" py-8 px-6 border">
            <div className=" flex justify-between mb-2">
              <h1 className=" text-black text-xl">Subtotal</h1>
              <h1 className=" text-black text-xl">NGN 100,000</h1>
            </div>
            <div className=" flex justify-between">
              <p className=" text-primary text-md">Discount</p>
              <p className=" text-primary text-md">(20%) -NGN 20,000</p>
            </div>
            <div className=" flex justify-between">
              <p className=" text-primary text-md">
                VAT{" "}
                <span className=" border w-2 h-2 border-primary/10 rounded-full p-1">
                  i
                </span>
              </p>
              <p className=" text-primary text-md">+NGN 7,000</p>
            </div>
            <hr className=" border-dotted my-4 border-black/50" />
            <div className=" flex justify-between">
              <p className=" text-primary text-lg">total</p>
              <p className=" text-black text-xl">NGN 87,000</p>
            </div>
            <div className=" flex flex-col gap-2 mt-6">
              <button className=" bg-black text-lg text-white py-2 rounded-lg">
                Proceed to checkout
              </button>
              <button className=" border border-primary/20 rounded-lg py-2 text-lg">
                Continue shopping
              </button>
            </div>
          </div>
        </div>
        <div>
          <h1 className=" flex gap-2 items-center text-black font-semibold text-3xl my-10">
            Similar products
            <MdKeyboardArrowRight className=" bg-primary/20 text-primary rounded-full" />
          </h1>

          <div className=" my-12 gap-10 grid grid-cols-2 lg:grid-cols-3 items-center">
            {homeItems.map((item) => (
              <div key={item.id}>
                <div className=" flex items-center justify-center bg-primary/20 p-7 rounded-md relative">
                  <img
                    className=" w-full max-w-[300px]"
                    src={item.image}
                    alt={item.title}
                  />
                  <CiHeart
                    size={35}
                    className=" absolute right-4 bg-white rounded-full p-1 bottom-2"
                  />
                </div>
                <h1 className=" font-bold text-[12px] md:text-[20px] lg:text-[22px]">
                  {item.title}
                </h1>
                <p className=" text-[10px] md:text-sm text-primary my-2">
                  {item.subtitle}
                </p>
                <div className=" mt-5 flex items-center justify-between">
                  <p className=" font-semibold text-[12px] md:text-[16px]">
                    {item.amount}
                  </p>
                  <button className=" text-primary text-[12px] md:text-[14px] lg:text-lg underline">
                    {item.addToCart}
                  </button>
                </div>
              </div>
            ))}
            {homeItems.map((item) => (
              <div key={item.id}>
                <div className=" flex items-center justify-center bg-primary/20 p-7 rounded-md relative">
                  <img
                    className=" w-full max-w-[300px]"
                    src={item.image}
                    alt={item.title}
                  />
                  <CiHeart
                    size={35}
                    className=" absolute right-4 bg-white rounded-full p-1 bottom-2"
                  />
                </div>
                <h1 className=" font-bold text-[12px] md:text-[20px] lg:text-[22px]">
                  {item.title}
                </h1>
                <p className=" text-[10px] md:text-sm text-primary my-2">
                  {item.subtitle}
                </p>
                <div className=" mt-5 flex items-center justify-between">
                  <p className=" font-semibold text-[12px] md:text-[16px]">
                    {item.amount}
                  </p>
                  <button className=" text-primary text-[12px] md:text-[14px] lg:text-lg underline">
                    {item.addToCart}
                  </button>
                </div>
              </div>
            ))}
            {homeItems.map((item) => (
              <div key={item.id}>
                <div className=" flex items-center justify-center bg-primary/20 p-7 rounded-md relative">
                  <img
                    className=" w-full max-w-[300px]"
                    src={item.image}
                    alt={item.title}
                  />
                  <CiHeart
                    size={35}
                    className=" absolute right-4 bg-white rounded-full p-1 bottom-2"
                  />
                </div>
                <h1 className=" font-bold text-[12px] md:text-[20px] lg:text-[22px]">
                  {item.title}
                </h1>
                <p className=" text-[10px] md:text-sm text-primary my-2">
                  {item.subtitle}
                </p>
                <div className=" mt-5 flex items-center justify-between">
                  <p className=" font-semibold text-[12px] md:text-[16px]">
                    {item.amount}
                  </p>
                  <button className=" text-primary text-[12px] md:text-[14px] lg:text-lg underline">
                    {item.addToCart}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
