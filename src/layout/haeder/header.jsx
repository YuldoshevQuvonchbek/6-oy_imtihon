import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/logo.png";
import LikeIcons from "../../assets/icons/LikeIcons";
import UserIcon from "../../assets/icons/UserIcon";
import Button from "../../components/button/button";

export const Header = () => {
  return (
    <div>
      <div className="container">
        <div className=" flex justify-between items-center pt-5 pb-5">
          <Link to={"/"}>
            <img className=" w-[93px]" src={img} alt="" />
          </Link>
          <div className=" flex items-center  gap-7">
            <div className=" flex items-center  gap-2">
              <LikeIcons />
              <p className=" text-sm  font-medium">Yoqtirganlar</p>
            </div>
            <div className=" flex items-center  gap-2">
              <UserIcon />
              <p className=" text-sm  font-medium">Akkaunt</p>
            </div>
            <Button variant={"primary"} children={"E'lonlarni joylashtirish"} />
          </div>
        </div>
      </div>
    </div>
  );
};
