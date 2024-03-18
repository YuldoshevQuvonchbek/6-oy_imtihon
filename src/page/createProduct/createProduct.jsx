import React from "react";
import { useGetTodo } from "../home/servese/query/useGetTodo";
import Button from "../../components/button/button";
import { usePostProducts } from "./servese/mutation/usePostProducts";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import SoatComponent from "../../components/soat";

const img = (url) => /\.(jpeg|jpg|gif|png|svg)$/i.test(url);

const schema = z.object({
  email: z.string().email(),
  name: z.string().max(20),

  surname: z.string().min(3),
  img: z
    .string()
    .url()
    .refine((url) => img(url), {
      message:
        "Invalid image URL. Please provide a URL ending with .jpeg, .jpg, .gif, .png, or .svg",
    }),
});

const CreateProduct = () => {
  const notify = () => toast.success("Malumot saqlandi");
  const naviget = useNavigate();

  const { data } = useGetTodo();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [product, setProduct] = React.useState("");
  const submit = (data) => {
    mutate(data, {
      onSuccess: (data) => {
        reset();
        notify();
      },
    });
  };
  // time :)
  const soat = SoatComponent();
  const time = soat.props.children.props.children;

  const { mutate } = usePostProducts(product);
  return (
    <div className=" bg-Secondary  py-12">
      <div className=" container">
        <form onSubmit={handleSubmit(submit)}>
          <h2 className=" text-2xl font-bold mb-6">E’lon berish</h2>
          <div className=" w-full bg-white p-8 mb-6   rounded-lg">
            <h2 className=" mb-7 text-xl font-medium">
              Bizga e’loningiz haqida gapirib bering
            </h2>
            <div className=" w-full">
              <div className=" flex flex-col">
                <label className="text-xs text-argent mb-2">
                  Sarlavha kiriting
                </label>
                <input
                  {...register("title")}
                  className=" pl-4 py-[14px] rounded-md bg-Secondary"
                  placeholder="Masalan iphone 13 Pro Max"
                  type="text"
                />
                <label className="text-xs mt-6 text-argent mb-2">Rukn</label>
                <select
                  {...register("datakey")}
                  onChange={(e) => setProduct(e.target.value)}
                  className=" pl-4 py-[14px] rounded-md bg-Secondary"
                >
                  <option selected disabled value="Bo'limni tanlang">
                    Bo'limni tanlang
                  </option>
                  {data?.map((item) => (
                    <option className="mb-2" key={item.id} value={item.datakey}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className=" w-full bg-white mb-6   rounded-lg p-8">
            <h2 className="text-xl mb-3 font-medium">
              Bizga e’loningiz haqida gapirib bering
            </h2>
            <p className=" text-argent mb-4">
              Birinchi surat e’loningiz asosiy rasmi bo’ladi. Suratlar tartibini
              ularning ustiga bosib va olib o’tish bilan o’zgartirishingiz
              mumkin.
            </p>
            {/* img :) */}
            <div className=" flex flex-col">
              <label className="text-xs text-argent mb-2">
                Rasmlarni qo’shish
              </label>
              <input
                {...register("img")}
                className=" pl-4 py-[14px] rounded-md bg-Secondary"
                placeholder="https://"
                type="text"
              />
              {errors.img && (
                <p className="  text-vivaldiRed   font-light text-[12px] text-red-500">
                  Rasmingizni https:// kurinishidagi manzilini kiriting
                </p>
              )}
            </div>
          </div>
          <div className=" w-full bg-white mb-6   rounded-lg p-8">
            <div>
              <label className=" pb-2">Tavsif</label>
              <textarea
                {...register("des")}
                className=" p-4 w-full bg-Secondary"
                rows="10"
              ></textarea>
              <div className=" py-6 flex items-center justify-between">
                <p className=" text-argent ">Yana kamida 80 ta belgi yozing</p>
                <p className=" text-argent ">0/9000</p>
              </div>
            </div>
          </div>
          <div className=" w-full bg-white  mb-6  rounded-lg p-8">
            <h2 className="font-medium text-xl mb-5">
              Siz bilan bog’lanish uchun
            </h2>
            <div className=" relative flex flex-col">
              <label className="text-xs text-argent mb-2">Narx</label>
              <input
                {...register("price")}
                className=" pl-4  mb-6 py-[14px] rounded-md bg-Secondary"
                placeholder=""
                type="text"
              />

              {/* Joylashuv :) */}
              <label className="text-xs text-argent mb-2">Joylashuv</label>
              <input
                {...register("location")}
                className=" pl-4  mb-6 py-[14px] rounded-md bg-Secondary"
                placeholder=""
                type="text"
              />
              {/* Ism :) */}
              <label className="text-xs text-argent mb-2">Ism</label>
              <input
                {...register("name")}
                className=" pl-4  mb-6 py-[14px] rounded-md bg-Secondary"
                placeholder="Ism"
                type="text"
              />
              {errors.name && (
                <p className=" text-vivaldiRed   font-light text-[12px] text-red-500">
                  Ism 2 ta harfdan ko'p bo'lishi kerak
                </p>
              )}
              {/* Familiya :) */}
              <label className="text-xs text-argent mb-2">Familiya</label>
              <input
                {...register("surname")}
                className=" pl-4  mb-6 py-[14px] rounded-md bg-Secondary"
                placeholder="familiya"
                type="text"
              />
              {errors.surname && (
                <p className="  text-vivaldiRed   font-light text-[12px] text-red-500">
                  Familiya min 3 ta harf bo'lishi kerak
                </p>
              )}
              {/* Email */}
              <label className="text-xs text-argent mb-2">Email-manzil</label>
              <input
                {...register("email")}
                className=" pl-4 mb-6 py-[14px] rounded-md bg-Secondary"
                placeholder=""
                type="text"
              />
              {errors.email && (
                <p className="  text-vivaldiRed   font-light text-[12px] text-red-500">
                  Email hato kirittinggiz
                </p>
              )}
              {/*Telefon raqami :)  */}
              <label className="text-xs text-argent mb-2">Telefon raqami</label>
              <input
                {...register("nummer")}
                className=" pl-4 mb-6 py-[14px] rounded-md bg-Secondary"
                placeholder="Telifon raqam"
                type="tel"
              />
              {errors.phone && (
                <p className="  text-vivaldiRed   font-light text-[12px] text-red-500">
                  Email hato kirittinggiz
                </p>
              )}
              <div className=" absolute left-[-1800px] ">
                <label className="text-xs text-argent mb-2">Vaq</label>
                <input
                  {...register("time")}
                  value={time}
                  className=" pl-4 mb-6 py-[14px] rounded-md bg-Secondary"
                  placeholder=""
                  type="text"
                />
              </div>
            </div>
          </div>
          <div>
            <div className=" flex justify-end">
              <Button
                type={"submit"}
                variant={"Secondary"}
                children={"E’lon joylash"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
