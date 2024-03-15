import React from "react";
import { Header } from "./haeder/header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer/footer";

const MainLayout = () => {
  return (
    <div className=" h-screen flex justify-between flex-col ">
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
