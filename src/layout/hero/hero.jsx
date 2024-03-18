import React from "react";
import ZoomIcon from "../../assets/icons/ZoomIcon";
import LokatsiyaIcon from "../../assets/icons/lokatsiyaIcon";
import Button from "../../components/button/button";
import { useGetAllTodo } from "../haeder/servese/mutation/useGetTodo";
import { useState } from "react";
import useDebounce from "../../hook/useDebans";
import { useGetCatigory } from "./quary/useGetCatigory";
import { Link } from "react-router-dom";
const Hero = () => {
  const [value, setValue] = React.useState("");
  const search = useDebounce(value);
  const { data } = useGetAllTodo(search);
  const { data: pradact } = useGetCatigory();
  console.log(pradact);

  return (
    <>
      {/*  */}
      <div className=" pt-8 pb-8 mb-8 bg-Secondary">
        <div className=" container">
          <form className="flex ">
            <div className=" relative w-full">
              <input
                className=" border max-w-[580px] rounded-l-lg pl-12 pb-[14px] w-full pt-[14px] outline-none border-shutterGrey"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={`${data?.length} natija bo‘yicha `}
                type="text"
              />
              <div className=" cursor-pointer absolute top-4 left-5 mr-3">
                <ZoomIcon />
              </div>
            </div>
            <div className=" relative w-full">
              <input
                className="max-w-[397px] border pl-12 pb-[14px] w-full pt-[14px] outline-none border-shutterGrey rounded-r-lg"
                placeholder="Butun O‘zbekiston"
                type={"text"}
              />
              <div className=" cursor-pointer absolute top-4 left-5 mr-3">
                <LokatsiyaIcon />
              </div>
            </div>
            <Button variant={"Secondary"} type={"submit"} children={"Izlash"} />
          </form>
          {value.length >= 2 ? (
            <div className="pt-3 pb-3 pl-5 pr-5 shadow-2xl h-[400px] overflow-y-scroll  max-w-[909px]  rounded-br-lg rounded-bl-lg">
              {pradact?.map((item) => (
                <Link
                  key={item.id}
                  to={`/all/${item.id}`}
                  onClick={(e) => setValue(e.target.reset())}
                >
                  <div className=" mb-3  flex border-vegan hover:transition duration-300   hover:shadow-2xl hover:bg-Secondary border-2 border-shutterGrey rounded  shadow-blue hover:border-blue pt-2 pb-2 pl-2 pr-2 justify-between  items-center">
                    <div className=" flex gap-1  items-center">
                      <img className="w-14 h-14" src={item.img} alt="" />
                      <div>
                        <h2 className=" mb-1 font-semibold text-base">
                          {item.title}
                        </h2>
                        <p className=" text-shutterGrey">
                          E'lon berdi :
                          {item.name ? (
                            <span className="font-medium ml-1 text-Black  text-base">
                              {item.name}
                            </span>
                          ) : (
                            <span className="font-medium ml-1 text-Black text-base">
                              E'lon berovchi ismi yo'q
                            </span>
                          )}
                        </p>
                      </div>
                    </div>

                    <div>
                      {item.price ? (
                        <p className="  rounded-md text-xl font-bold pt-0.5 pb-0.5 pl-1 text-vivaldiRed pr-1">
                          {item.price} UYE
                        </p>
                      ) : (
                        <p className="  rounded-md text-xl font-bold pt-0.5 pb-0.5 pl-1 text-vivaldiRed pr-1">
                          Tekinga
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
