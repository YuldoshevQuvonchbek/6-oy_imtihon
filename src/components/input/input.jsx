import React from "react";
import clsx from "clsx";

const Input = ({ type, placeholder, variant, icon }) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={clsx(
          "input",
          {
            "max-w-[580px] rounded-l-lg": variant === "primary",
            "max-w-[397px] rounded-r-lg": variant === "Secondary",
          },
          "border pl-12 pb-[14px] w-full pt-[14px] outline-none border-shutterGrey"
        )}
      />
      <div className=" cursor-pointer absolute top-4 left-5 mr-3">{icon}</div>
    </>
  );
};

export default Input;
