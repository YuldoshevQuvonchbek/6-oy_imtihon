import React from "react";
import Input from "../../components/input/input";
import ZoomIcon from "../../assets/icons/ZoomIcon";
import LokatsiyaIcon from "../../assets/icons/lokatsiyaIcon";
import Button from "../../components/button/button";
import { useGetAllTodo } from "../haeder/servese/mutation/useGetTodo";

const Hero = () => {
  const { data } = useGetAllTodo();

  return (
    <>
      <div className=" pt-8 pb-8 mb-8 bg-Secondary">
        <div className=" container">
          <form className="flex ">
            <div className=" relative w-full">
              <Input
                variant={"primary"}
                placeholder={`${data?.length} natija bo‘yicha `}
                type={"text"}
                icon={<ZoomIcon />}
              />
            </div>
            <div className=" relative w-full">
              <Input
                placeholder={"Butun O‘zbekiston"}
                variant={"Secondary"}
                type={"text"}
                icon={<LokatsiyaIcon />}
              />
            </div>
            <Button variant={"Secondary"} type={"submit"} children={"Izlash"} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Hero;
