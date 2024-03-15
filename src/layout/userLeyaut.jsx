import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/store";

const UserLeyaut = () => {
  const users = loadState("users");
  if (!users) return <Navigate to={"/"} replace />;
  return (
    <div className="container">
      <div>
        <Link to="/users">Profile</Link>
        <Link to="/users/addres">addres </Link>
      </div>
      <Outlet />
    </div>
  );
};
export default UserLeyaut;
