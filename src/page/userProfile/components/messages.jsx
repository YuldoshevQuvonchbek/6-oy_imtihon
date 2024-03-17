import React from "react";
import img from "../../../assets/img/noMasssagge.png";
const Messages = () => {
  return (
    <div className=" text-center">
      <div className=" flex my-auto justify-center">
        <img className=" w-[400px] h-auto" src={img} alt="img" />
      </div>
      <h2 className=" text-base font-bold mb-4">Hali hech qanday xabar yo'q</h2>
      <p className="text-sm font-normal mb-8">
        Barcha yuborilgan va qabul qilingan xabarlar shu yerda saqlanadi.
      </p>
    </div>
  );
};

export default Messages;
