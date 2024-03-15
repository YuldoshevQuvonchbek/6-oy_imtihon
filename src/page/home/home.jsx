import React from "react";
import CategoryCart from "../../components/card/category/categoryCart";
import { useGetTodo } from "./servese/query/useGetTodo";
import Hero from "../../layout/hero/hero";

const Home = () => {
  const { data } = useGetTodo();

  return (
    <div>
      <Hero />
      <div className=" container">
        <h2 className="text-2xl mb-6 font-bold">Kategoriyalar</h2>
        <div className=" flex gap-9 mb-14 flex-wrap">
          {data?.map((item) => (
            <CategoryCart
              key={item.id}
              img={item.img}
              name={item.name}
              datakey={item.datakey}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
