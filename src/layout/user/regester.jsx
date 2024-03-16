import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { saveState } from "../../config/store";
import { useNavigate } from "react-router-dom";
import { Useregester } from "./servese/mutation/useregester";

const Regerter = () => {
  const naviget = useNavigate();
  const { mutate } = Useregester();
  const { register, reset, handleSubmit } = useForm();
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        saveState("user", data);
        naviget("/");
        reset();
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        {...register("name")}
        placeholder="Name"
        className=" border-vegan rounded-lg w-full border mb-4 p-2"
        name="text"
        type="text"
      />
      <input
        {...register("email")}
        placeholder="Email"
        className=" border-vegan rounded-lg w-full border mb-4 p-2"
        name="email"
        type="email"
      />
      <input
        {...register("password")}
        placeholder="Password"
        className=" border-vegan  rounded-lg w-full border p-2"
        name="password"
        type="password"
      />
      <button className=" pt-2 pb-2 w-full border " type="submit">
        Submit
      </button>
    </form>
  );
};

export default Regerter;
