import React from "react";
import img from "../../../assets/img/promoCodeNo.jpg";

const PromoCode = () => {
  return (
    <div className=" text-center">
      <div className=" flex my-auto justify-center">
        <img className=" w-[400px] h-auto" src={img} alt="img" />
      </div>
      <h2 className=" text-base font-bold mb-4">
        Hali hech qanday Promo kod yo'q
      </h2>
      <p className="text-sm font-normal mb-8">
        Barcha promo kod va qabul qilingan promo kodlar shu yerda saqlanadi.
      </p>
    </div>
  );
};

export default PromoCode;
