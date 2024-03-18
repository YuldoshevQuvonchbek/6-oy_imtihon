import React from "react";
import { userGetEdit } from "./server/mutation/userGetEdit";
import { loadState, saveState } from "../../../config/store";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Button from "../../../components/button/button";

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

const Settings = () => {
  const notify = () => toast.success("Shaxsiy malumotlar saqlandi ");
  const tokin = loadState("user");
  const { mutate } = userGetEdit(tokin?.user?.id);
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const submit = (data) => {
    const stateuser = {
      id: tokin?.user?.id,
      email: tokin?.user?.email,
      ...data,
    };
    mutate(stateuser, {
      onSuccess: (stateuser) => {
        saveState("user", { user: stateuser, accessToken: tokin?.accessToken });
        reset();
        window.location.reload();
        notify();
      },
    });
  };

  return (
    <div className=" flex mt-5  justify-center ">
      <div className="top-16 w-full max-w-sm px-4">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
                ${open ? "text-white mb-[200%]" : "text-white/90  mb-5 "}
                group inline-flex items-center transition hover:scale-110 hover:shadow-xl  duration-300 bg-Black rounded-md  px-3 py-2 text-base font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
              >
                shaxsiy malumotlarni uzgartirish
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute top-[30px]   left-[43%] z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                  <div className="overflow-hidden  rounded-lg shadow-lg ring-1 ring-black/5">
                    <div className="relative text-center gap-8 bg-Secondary p-5 ">
                      <p className="text-2xl font-medium">
                        Shaxsiy malumotlar uzgartirishda etiborliy bo'ling !!
                      </p>
                    </div>
                    <div className="bg-Secondary p-4">
                      <form onSubmit={handleSubmit(submit)}>
                        {/* user img :) */}
                        <label className=" font-normal text-xs text-argent  ">
                          rasm
                        </label>
                        <input
                          {...register("img")}
                          placeholder="https://"
                          className=" border-vegan mt-2 rounded-lg w-full border mb-4 p-2"
                          type="text"
                        />
                        {errors.img && (
                          <p className="  text-vivaldiRed   font-light text-[12px] text-red-500">
                            Rasmingizni https:// kurinishidagi manzilini
                            kiriting
                          </p>
                        )}
                        {/* user familiya :) */}
                        <label className=" font-normal text-xs text-argent  ">
                          Familiya
                        </label>
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
                        <label className=" font-normal text-xs text-argent  ">
                          Ism
                        </label>
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
                        <label className=" font-normal text-xs text-argent  ">
                          Email
                        </label>
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
                        <label className=" font-normal text-xs text-argent  ">
                          Password
                        </label>
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
                        <div className=" mt-5 flex justify-center">
                          {/* submit btn :) */}
                          <Button
                            variant={"Secondary"}
                            children={"Yangilash"}
                            type={"submit"}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default Settings;
