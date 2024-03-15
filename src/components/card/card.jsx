import React from "react";
import CartLike from "../../assets/icons/CartLike";
import { Link } from "react-router-dom";

const Card = ({ img, title, price, location, category, id, time }) => {
  return (
    <div className="rounded-lg hover:transition  duration-500 hover: hover:hover:scale-105 hover:shadow-xl border-placebo p-1 border  w-[202px]">
      <div className=" mb-4">
        <Link to={`/product/${category}/${id}`}>
          {" "}
          <img src={img} alt="img" />
        </Link>
      </div>
      <div className=" pl-[10px] pr-[10px]">
        <h2 className=" mb-3 text-sm font-normal">{title}</h2>
        <p className="text-xl font-bold mb-2 text-vivaldiRed">{price} UYE</p>
        <p className="text-sm text-argent font-normal mb-3">{location}</p>
        <div className=" flex  justify-between mb-[14px]  items-center">
          <p className="text-sm text-argent font-normal ">{time}</p>
          <div>
            <CartLike />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
