import React from "react";
import { Outlet } from "react-router-dom";
import img from "../../assets/img/no.gif";
import Hero from "../../layout/hero/hero";

const Notfaunt = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
      <Hero />
      <div className="container">
        {/* a joke :) */}
        <div className="mt-10 mb-10">
          <div>
            <img
              className=" w-[600px] h-auto flex items-center ml-auto mr-auto justify-center "
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfaunt;
