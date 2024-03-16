import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/logo.png";
import LikeIcons from "../../assets/icons/LikeIcons";
import UserIcon from "../../assets/icons/UserIcon";
import Button from "../../components/button/button";
import { loadState } from "../../config/store";

export const Header = () => {
  const user = loadState("user");
  return (
    <div className=" shadow-md">
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

            {user ? (
              <Link to="/profile">
                <h2>User</h2>
              </Link>
            ) : (
              <Link to="/users/login" className=" flex items-center  gap-2">
                <UserIcon />
                <p className=" text-sm  font-medium">Akkaunt</p>
              </Link>
            )}

            <Button variant={"primary"} children={"E'lonlarni joylashtirish"} />
          </div>
        </div>
      </div>
    </div>
  );
};
