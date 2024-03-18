import React from "react";
import { useSelector } from "react-redux";
import Like_item from "../../components/like_item/like_item";
const LikePage = () => {
  const { itemLike } = useSelector((state) => state.like);

  return (
    <section className=" container">
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
    </section>
  );
};

export default LikePage;
