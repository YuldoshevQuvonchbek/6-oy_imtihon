import React from "react";
import clsx from "clsx";

const Button = ({ children, variant, type }) => {
  return (
    <button
      className={clsx(
        "btn",
        {
          " border-argent  rounded-lg hover:bg-Black hover:text-white font-medium text-base   pt-2 pb-2 pl-4 pr-4":
            variant === "primary",
          " border-argent  rounded-lg hover:bg-Black hover:text-white font-medium text-base   pt-3 pb-3 pl-10 pr-10":
            variant === "Secondary",
          " border-argent  mt-14 rounded-lg hover:bg-Black w-full text-center hover:text-white font-medium text-base   pt-3 pb-3 pl-10 pr-10":
            variant === "register",
        },
        "transition hover:scale-110 hover:shadow-xl border duration-300"
      )}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
