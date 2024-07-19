import React, { useEffect, useState, useContext } from "react";
import tv from "/images/Frame (2).png"; // You might replace this with an actual image URL from the API if available
import { CiHeart } from "react-icons/ci";
import {
  MdOutlineKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { CartContext } from "../Home/CartContext";
import { fetchTimbuData } from "../fetchTimbuData";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [homeItems, setHomeItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchTimbuData();
        setHomeItems(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="mt-4">
      <div className="container">
        <div className="mb-6 gap-10 grid grid-cols-2 lg:grid-cols-3 items-center">
          {homeItems.map((item) => (
            <div key={item.id}>
              <div className="flex items-center justify-center bg-primary/20 p-7 rounded-md relative">
                <img
                  className="w-full max-w-[300px]"
                  src={item.image || tv} // Replace with item.image if available from the API
                  alt={item.title}
                />
                <CiHeart
                  size={35}
                  className="absolute right-4 bg-white rounded-full p-1 bottom-2"
                />
              </div>
              <h1 className="font-bold text-[12px] md:text-[20px] lg:text-[22px]">
                {item.title}
              </h1>
              <p className="text-[10px] md:text-sm text-primary my-2">
                {item.subtitle}
              </p>
              <div className="mt-5 flex items-center justify-between">
                <p className="font-semibold text-[12px] md:text-[16px]">
                  {item.amount}
                </p>
                <button
                  className="text-primary text-[12px] md:text-[14px] lg:text-lg underline"
                  onClick={() => addToCart(item)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center my-12 justify-between">
          <div className="flex items-center gap-1 cursor-pointer border border-primary px-2">
            <MdOutlineKeyboardArrowLeft size={20} />
            <p>Previous</p>
          </div>
          <div className="flex gap-3 text-primary cursor-pointer">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>...</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
          </div>
          <div className="flex items-center gap-1 cursor-pointer border border-primary px-2">
            <p>Next</p>
            <MdKeyboardArrowRight size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
