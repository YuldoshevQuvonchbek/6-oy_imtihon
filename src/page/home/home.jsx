import React from "react";
import CategoryCart from "../../components/card/category/categoryCart";
import { useGetTodo } from "./servese/query/useGetTodo";
import Hero from "../../layout/hero/hero";
import { useGetAllTodo } from "../../layout/haeder/servese/mutation/useGetTodo";
import Card from "../../components/card/card";
import LodingCrat from "../../components/loding/lodingCrat";

const Home = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading: cotigory } = useGetTodo();
  const { data: product, isLoading } = useGetAllTodo(page);
  let buttons = Array(product?.pageSize).fill(null);
  const changePage = (page) => {
    console.log(page);
    setPage(page);
  };

  return (
    <div>
      <Hero />
      <div className=" container">
        <h2 className="text-2xl mb-6 font-bold">Kategoriyalar</h2>
        <div className=" flex gap-9 mb-14 flex-wrap">
          {cotigory ? (
            <h1>Loding...</h1>
          ) : (
            data?.map((item) => (
              <CategoryCart
                key={item.id}
                img={item.img}
                name={item.name}
                datakey={item.datakey}
              />
            ))
          )}
          {}
        </div>
      </div>
      <div className=" bg-Secondary pt-8">
        <div className=" container">
          <h2 className="font-bold  text-2xl pb-6">Siz uchun maxsus</h2>
          <div className=" flex flex-wrap  pb-6 justify-between">
            {isLoading ? (
              <h2>Loding...</h2>
            ) : (
              product?.data?.map((item) => (
                <Card
                  id={item.id}
                  category={item.datakey}
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  location={item.location}
                  time={item.time}
                />
              ))
            )}
          </div>
          <div className=" flex  pb-6  items-center gap-2  justify-center">
            {buttons?.map((_, i) => (
              <button
                onClick={() => changePage(i + 1)}
                className={`bg-Secondary w-[50px] hover:scale-110 transform duration-100  h-[50px] border rounded-lg ${
                  page === i + 1 ? "active  shadow-2xl border-blue" : ""
                }`}
                key={i}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
