import React, { useState } from "react";
import CartLike from "../../assets/icons/CartLike";
import { Link } from "react-router-dom";
import { likeAddItem, removiLIkeitem } from "../../redux/reduser/likeredusser";
import { useDispatch, useSelector } from "react-redux";
import img2 from "../../assets/img/like.png";

const Card = ({ img, title, price, location, category, id, time }) => {
  const dicpetch = useDispatch();
  const { itemLike } = useSelector((state) => state.like);
  const liked = itemLike?.find((item) => item.id === id);

  const addLike = () => {
    dicpetch(likeAddItem({ id, img, title, category, price, location }));
  };
  const removeLike = () => {
    dicpetch(removiLIkeitem({ id, img, title, price, category, location }));
  };

  return (
    <div className="rounded-lg hover:transition  duration-500 hover: hover:hover:scale-105 hover:shadow-xl border-placebo p-1 border  w-[202px]">
      <div className=" mb-4">
        <Link to={`/${category}/${id}`}>
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
            {!liked ? (
              <button onClick={() => addLike()}>
                <CartLike />
              </button>
            ) : (
              <button onClick={() => removeLike()}>
                <img className=" w-5 h-5" src={img2} alt="" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
