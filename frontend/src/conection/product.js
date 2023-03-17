import axios from "axios";

// list
export const getProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/product");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// delete
export const deleteProduct = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/product/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// create
export const createProduct = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/product",
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// get by id
export const getProductById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/product/${id}`);
    return res.data;
  } catch (error) {
    return [];
  }
};

// update
export const putProduct = async (id, data) => {
  try {
    const res = await axios.put(
      `http://localhost:3000/api/product/${id}`,
      data
    );
    return res.data;
  } catch (error) {
    return null;
  }
}