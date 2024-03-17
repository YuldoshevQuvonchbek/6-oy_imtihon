import React from "react";
import img from "../../../assets/img/noMoniy.jpg";

const Payment = () => {
  return (
    <div className=" text-center">
      <div className=" flex my-auto justify-center">
        <img className=" w-[400px] h-auto" src={img} alt="img" />
      </div>
      <h2 className=" text-base font-bold mb-4">
        Hali hech qanday To’lovlar tarixi yo'q
      </h2>
      <p className="text-sm font-normal mb-8">
        Barcha To’lovlar tarixi shu yerda ko'rinadi.
      </p>
    </div>
  );
};

export default Payment;
