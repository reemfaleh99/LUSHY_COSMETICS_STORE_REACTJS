import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ data, wrap = "flex-wrap" }) => {
  const flexWrapClass = wrap === "no-wrap" ? "flex-nowrap" : "flex-wrap";
  return (
    <div className={`flex gap-5 items-center justify-center ${flexWrapClass}`}>
      {data.map((item, index) => (
        <ProductCard product={item} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
