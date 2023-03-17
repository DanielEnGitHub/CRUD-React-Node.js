import React from "react";
import { getProducts } from "../../conection/product";
import useListAPI from "../../hooks/useListAPI";

const Product = () => {
  const { data } = useListAPI({ getFunction: getProducts });

  return <div>Product</div>;
};

export default Product;
