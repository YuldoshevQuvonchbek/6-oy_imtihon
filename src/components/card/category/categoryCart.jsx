import React from "react";
import { Link } from "react-router-dom";

const CategoryCart = ({ img, name, datakey }) => {
  return (
    <div className="w-[84px]  cursor-pointer justify-center text-center">
      <div>
        <Link to={`product/${datakey}`}>
          <img
            className=" hover:shadow-xl rounded-full hover:scale-110 duration-300 transition  w-[84px] h-[84px] mb-4 "
            src={img}
            alt="img"
          />
        </Link>
      </div>
      <h2 className="font-normal  text-sm">{name}</h2>
    </div>
  );
};

export default CategoryCart;
