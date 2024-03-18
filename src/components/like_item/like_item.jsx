import React from "react";
import { removiLIkeitem } from "../../redux/reduser/likeredusser";
import { useDispatch } from "react-redux";
import img2 from "../../assets/img/like.png";
import { Link } from "react-router-dom";

export const Like_item = ({
  id,
  title,
  location,
  category,
  time,
  price,
  img,
}) => {
  console.log(id);
  const dispatch = useDispatch();
  const removiLIkeitemm = () => {
    dispatch(
      removiLIkeitem({ id, title, location, category, time, price, img })
    );
  };
  console.log(title);
  return (
    <div className=" container">
      <div className="  flex  flex-wrap gap-5 pb-9 py-12 ">
        <div className="rounded-lg hover:transition  duration-500 hover: hover:hover:scale-105 hover:shadow-xl border-placebo p-1 border  w-[202px]">
          <div className=" mb-4">
            <Link to={`/all/${id}`}>
              <img src={img} alt="img" />
            </Link>
          </div>
          <div className=" pl-[10px] pr-[10px]">
            <h2 className=" mb-3 text-sm font-normal">{title}</h2>
            <p className="text-xl font-bold mb-2 text-vivaldiRed">
              {price} UYE
            </p>
            <p className="text-sm text-argent font-normal mb-3">{location}</p>
            <div className=" flex  justify-between mb-[14px]  items-center">
              <p className="text-sm text-argent font-normal ">{time}</p>
              <div>
                <button onClick={removiLIkeitemm}>
                  <img className=" w-8" src={img2} alt="img" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Like_item;
