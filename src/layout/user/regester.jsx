import React from "react";
import { useForm } from "react-hook-form";
import { saveState } from "../../config/store";
import { useNavigate } from "react-router-dom";
import { Useregester } from "./servese/mutation/useregester";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z.string().email(),
  name: z.string().max(10),
  password: z.string().min(8),
});

const Regerter = () => {
  const naviget = useNavigate();
  const { mutate } = Useregester();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });
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
        type="text"
      />
      {errors.name && (
        <p className=" font-Roboto   font-light text-[12px] text-red-500">
          Familiya min 3 ta harf bo'lishi kerak
        </p>
      )}

      <input
        {...register("email")}
        placeholder="Email"
        className=" border-vegan rounded-lg w-full border mb-4 p-2"
        type="text"
      />
      {errors.email && (
        <p className=" font-Roboto   font-light text-[12px] text-red-500">
          Familiya min 3 ta harf bo'lishi kerak
        </p>
      )}
      <input
        {...register("password")}
        placeholder="Password"
        className=" border-vegan  rounded-lg w-full border p-2"
        name="password"
        type="password"
      />
      {errors.password && (
        <p className=" font-Roboto   font-light text-[12px] text-red-500">
          Familiya min 3 ta harf bo'lishi kerak
        </p>
      )}
      <button className=" pt-2 pb-2 w-full border " type="submit">
        Submit
      </button>
    </form>
  );
};

export default Regerter;
