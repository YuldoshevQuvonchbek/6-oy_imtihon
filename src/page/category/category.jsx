import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleCategory } from "../home/servese/query/useGetSingleCategory";
import Card from "../../components/card/card";
import Hero from "../../layout/hero/hero";

const Category = () => {
  const { category } = useParams();
  const { data } = useGetSingleCategory(category);

  return (
    <>
      <Hero />
      <div className=" bg-Secondary  pt-8 pb-16">
        <div className="container">
          <h2 className="text-2xl mb-7  font-bold">Top e’lonlar</h2>
          <div className=" flex flex-wrap gap-6">
            {data?.map((item) => (
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
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
