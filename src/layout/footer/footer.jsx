import React from "react";
import img from "../../assets/img/logoFooter.svg";
import Appstory from "../../assets/icons/Appstory";
import PleyMarket from "../../assets/icons/PleyMarket";

export const Footer = () => {
  return (
    <div className=" bg-Black pt-9 ">
      <div className=" container">
        <div className="  flex justify-between pb-6 border-b-2 border-argent ">
          <div className=" w-[93px] ">
            <img src={img} alt="logo" />
          </div>
          <ul>
            <li className=" text-white mb-2 text-sm font-medium">
              Mobil ilovalar
            </li>
            <li className=" text-white mb-2 text-sm font-medium">Yordam</li>
            <li className=" text-white mb-2 text-sm font-medium">
              Pullik xizmatlar
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              OXO da biznes
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              Saytda reklama
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              Foydalanish shartlari
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              Maxfiylik siyosati
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              Foydalanish shartlari
            </li>
          </ul>
          <ul>
            <li className=" text-white mb-2 text-sm font-medium">
              Qanday qilib sotish va sotib olish kerak?
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              Xavfsizlik qoidalari
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              Sayt xaritasi
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              Mintaqalar xaritasi
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              OXO da karyera
            </li>
            <li className=" text-white mb-2 text-sm font-medium">
              Qayta aloqa
            </li>
          </ul>
          <div>
            <div className=" cursor-pointer mb-4">
              <Appstory />
            </div>
            <div className="cursor-pointer ">
              <PleyMarket />
            </div>
          </div>
        </div>
        <div className=" pt-8 pb-8">
          <p className=" text-sm text-white font-normal">
            © 2022 Barcha huquqlar himoyalangan.Ushbu sayt cookie-fayllardan
            foydalanadi. Brauzeringizda cookie sozlamalarini o'zgartirishingiz
            mumkin.
          </p>
        </div>
      </div>
    </div>
  );
};
