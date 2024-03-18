import React from "react";
import { useForm } from "react-hook-form";
import { saveState } from "../../config/store";
import { useNavigate } from "react-router-dom";
import { UseLogin } from "./servese/mutation/useLogin";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/button/button";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const Login = () => {
  const { mutate, isPending } = UseLogin();
  const naviget = useNavigate();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        saveState("user", data);
        reset();
        naviget("/");
      },
    });
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <label className=" font-normal text-xs  text-argent  ">Email</label>
      <input
        {...register("email")}
        placeholder="Email"
        className=" border-vegan mt-2 rounded-lg w-full border mb-4 p-2"
        name="email"
        type="email"
      />
      {errors.email && (
        <p className=" font-Roboto text-vivaldiRed   font-light text-[12px] text-red-500">
          Rasmingizni https:// kurinishidagi manzilini kiriting
        </p>
      )}
      <label className=" mt-2 font-normal text-xs text-argent  ">
        Password
      </label>
      <input
        {...register("password")}
        placeholder="Password"
        className=" border-vegan  mt-2 mb-4  rounded-lg w-full border p-2"
        name="password"
        type="password"
      />
      {errors.password && (
        <p className=" font-Roboto  text-vivaldiRed  font-light text-[12px] text-red-500">
          Rasmingizni https:// kurinishidagi manzilini kiriting
        </p>
      )}

      {/* submit btn :) */}
      <Button
        variant={"register"}
        children={`${isPending ? "Loding..." : "Ro’yhatdan o’tish"}`}
        type={"submit"}
      />
    </form>
  );
};
export default Login;
