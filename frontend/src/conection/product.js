import axios from "axios";

export const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/product");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/product/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
