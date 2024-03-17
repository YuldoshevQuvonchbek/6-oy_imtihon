import React from "react";
import { Link, Navigate } from "react-router-dom";
import img from "../../assets/img/logo.png";
import LikeIcons from "../../assets/icons/LikeIcons";
import UserIcon from "../../assets/icons/UserIcon";
import Button from "../../components/button/button";
import { loadState } from "../../config/store";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const Navigate = useNavigate();

  const user = loadState("user");
  if (
    (!user && window.location.pathname === "/profile") ||
    (!user && window.location.pathname === "/CreateProduct")
  ) {
    Navigate("/users/login");
  }

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
                <div className=" flex items-center gap-2">
                  <div>
                    <img
                      className=" w-8 h-8 rounded-full"
                      src={user.user.img}
                      alt="img"
                    />
                  </div>
                  <h2>{user.user.name}</h2>
                </div>
              </Link>
            ) : (
              <Link to="/users/login" className=" flex items-center  gap-2">
                <UserIcon />
                <p className="  text-sm  font-medium">Akkaunt</p>
              </Link>
            )}

            <Link to="/CreateProduct">
              <Button
                variant={"primary"}
                children={"E'lonlarni joylashtirish"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
