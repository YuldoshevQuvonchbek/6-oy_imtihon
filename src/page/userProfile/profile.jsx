import React from "react";
import { loadState } from "../../config/store";
import { Link, NavLink, Navigate, Outlet } from "react-router-dom";
import img from "../../assets/img/user-bg-img.png";
import PersionalIcon from "../../assets/icons/persionalIcon";
import Fasebook from "../../assets/icons/fasebook";
import Youtube from "../../assets/icons/youtube";
import Tiktok from "../../assets/icons/tiktok";
import Teligram from "../../assets/icons/teligram";
import Insta from "../../assets/icons/insta";
import Warning from "../../assets/icons/warning";
import Button from "../../components/button/button";
import SoatComponent from "../../components/soat";
const Profile = () => {
  const user = loadState("user");
  if (!user) return <Navigate to={"/"} replace />;

  return (
    <div>
      <div>
        {/*  cantet :)*/}
        <div>
          <div
            className=" bg-cover bg-center  h-[228px]"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className=" container">
            <div className=" relative">
              {/* user :) */}
              <div className=" flex items-center top-[-80px] absolute  gap-3">
                {/* user img :) */}
                <div className="h-[160px] border-blue border rounded-full w-[160px]">
                  <img
                    className="h-[158px] w-[158px] rounded-full"
                    src={user.user.img}
                    alt="user"
                  />
                </div>
                <div>
                  {/* name :) */}
                  <div className=" flex gap-3   mb-8  items-center">
                    <h2 className=" text-white text-3xl font-bold">
                      {user.user.name} {user.user.surname}
                    </h2>
                    <PersionalIcon />
                  </div>
                  {/* ijtimoiy tarmoqlar :) */}
                  <div className=" flex  gap-6 items-center">
                    <Link>
                      <Fasebook />
                    </Link>
                    <Link>
                      <Youtube />
                    </Link>
                    <Link>
                      <Tiktok />
                    </Link>
                    <Link>
                      <Teligram />
                    </Link>
                    <Link>
                      <Insta />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex justify-end container">
            <div className=" flex items-center gap-5 mt-[93px]">
              <div>
                <p className=" mb-2 text-sm">Sizning hisobingiz: 0 so’m</p>
                <p className=" text-sm">Mavjud bonuslar: 0 so’m</p>
              </div>
              <Warning />
              <div className=" flex items-center gap-4">
                <Button
                  variant={"Secondary"}
                  children={"Hamyonni to’ldirish"}
                  type={"submit"}
                />
                <Button
                  variant={"Secondary"}
                  children={"Paket sotib olish"}
                  type={"submit"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className=" container">
          <div className=" mt-[101px]">
            {/* bar :) */}
            <div className=" catalog   pb-2 flex items-center justify-between  mb-2">
              <NavLink
                className="text-argent font-medium text-base hover:text-blue duration-200 transform border-white border-b-2"
                to={"/profile/announcements"}
              >
                E’lonlar
              </NavLink>
              <NavLink
                className="text-argent font-medium text-base hover:text-blue duration-200 transform border-white border-b-2"
                to={"/profile/messages"}
              >
                Xabarlar
              </NavLink>
              <NavLink
                className="text-argent font-medium text-base hover:text-blue duration-200 transform border-white border-b-2"
                to={"/profile/payment"}
              >
                To’lovlar tarixi
              </NavLink>
              <NavLink
                className="text-argent font-medium text-base hover:text-blue duration-200 transform border-white border-b-2"
                to={"/profile/settings"}
              >
                Sozlamalar
              </NavLink>
              <NavLink
                className="text-argent font-medium text-base hover:text-blue duration-200 transform border-white border-b-2"
                to={"/profile/promoCode"}
              >
                Promokod
              </NavLink>
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
