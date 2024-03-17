import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const UserLeyaut = () => {
  return (
    <div className="container ">
      <div className="w-[410px] ml-auto shadow-xl mt-16 mb-20 rounded-lg  mr-auto justify-center  p-8  ">
        <div className=" border-b-4 border-argent rounded-sm pb-2 mb-5  ">
          <NavLink
            to="/users/login"
            className="text-argent  pb-[10px]  px-10 text-base font-bold"
          >
            Kirish
          </NavLink>
          <NavLink
            to="/users/regerter"
            className="text-argent px-[51px]   pb-[10px] text-base font-bold"
          >
            Ro’yxatdan o’tish
          </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default UserLeyaut;
