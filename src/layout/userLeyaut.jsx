import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/store";

const UserLeyaut = () => {
  return (
    <div className="container">
      <div>
        <div>
          <NavLink to="/users/login">Kirish</NavLink>
          <NavLink to="/users/regerter">Ro’yxatdan o’tish </NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default UserLeyaut;
