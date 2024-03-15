import React from "react";
import { useParams } from "react-router-dom";
import { useGetALLPadact } from "../home/servese/query/useGetALLPadact";

const ProductInfo = () => {
  const { id, category } = useParams();
  const { data } = useGetALLPadact(category, id);

  return <div>ProductInfo</div>;
};

export default ProductInfo;
