import React from "react";
import { useForm } from "react-hook-form";
import { saveState } from "../../config/store";
import { useNavigate } from "react-router-dom";
import { Useregester } from "./servese/mutation/useregester";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/button/button";

const img = (url) => /\.(jpeg|jpg|gif|png|svg)$/i.test(url);

const schema = z.object({
  email: z.string().email(),
  name: z.string().min(10),
  password: z.string().min(8),
  surname: z.string().min(3),
  img: z
    .string()
    .url()
    .refine((url) => img(url), {
      message:
        "Invalid image URL. Please provide a URL ending with .jpeg, .jpg, .gif, .png, or .svg",
    }),
});

const Regerter = () => {
  const naviget = useNavigate();
  const { mutate, isPending } = Useregester();
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
        reset();
        naviget("/");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      {/* user img :) */}
      <label className=" font-normal text-xs text-argent  ">rasm</label>
      <input
        {...register("img")}
        placeholder="https://"
        className=" border-vegan mt-2 rounded-lg w-full border mb-4 p-2"
        type="text"
      />
      {errors.img && (
        <p className="  text-vivaldiRed   font-light text-[12px] text-red-500">
          Rasmingizni https:// kurinishidagi manzilini kiriting
        </p>
      )}
      {/* user familiya :) */}
      <label className=" font-normal text-xs text-argent  ">Familiya</label>
      <input
        {...register("surname")}
        placeholder="Familiya"
        className=" border-vegan mt-2 rounded-lg w-full border mb-4 p-2"
        type="text"
      />
      {errors.surname && (
        <p className="  text-vivaldiRed   font-light text-[12px] text-red-500">
          Familiya min 3 ta harf bo'lishi kerak
        </p>
      )}
      {/*User ism :) */}
      <label className=" font-normal text-xs text-argent  ">Ism</label>
      <input
        {...register("name")}
        placeholder="Ism"
        className=" border-vegan mt-2 rounded-lg w-full border mb-4 p-2"
        type="text"
      />
      {errors.name && (
        <p className=" text-vivaldiRed   font-light text-[12px] text-red-500">
          Ism 2 ta harfdan ko'p bo'lishi kerak
        </p>
      )}
      {/* user Email :) */}
      <label className=" font-normal text-xs text-argent  ">Email</label>
      <input
        {...register("email")}
        placeholder="Email"
        className=" border-vegan mt-2 rounded-lg w-full border mb-4 p-2"
        type="text"
      />
      {errors.email && (
        <p className="  text-vivaldiRed   font-light text-[12px] text-red-500">
          Email hato kirittinggiz
        </p>
      )}
      {/* user password :) */}
      <label className=" font-normal text-xs text-argent  ">Password</label>
      <input
        {...register("password")}
        placeholder="Password"
        className=" border-vegan  mt-2 rounded-lg w-full border p-2"
        name="password"
        type="password"
      />
      {errors.password && (
        <p className="  text-vivaldiRed  font-light text-[12px] text-red-500">
          Password hato !!
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

export default Regerter;
