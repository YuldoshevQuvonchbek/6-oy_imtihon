import React from "react";
import { useSelector } from "react-redux";
import Like_item from "../../components/like_item/like_item";
import img from "../../assets/img/nilike.jpg";
const LikePage = () => {
  const { itemLike } = useSelector((state) => state.like);

  return (
    <section className=" container">
      {!itemLike?.length ? (
        <div className=" w-[400px] h-[400px] flex justify-center items-center mt-[5%] ml-auto mr-auto">
          <img src={img} alt="img" />
        </div>
      ) : (
        <div className=" grid   grid-cols-5">
          {itemLike?.map((item) => (
            <Like_item
              key={item.id}
              id={item.id}
              title={item.title}
              time={item.time}
              location={item.location}
              price={item.price}
              img={item.img}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default LikePage;
