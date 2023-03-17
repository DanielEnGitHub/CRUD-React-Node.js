import axios from "axios";

// list
export const getCategories = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/category");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// delete
export const deleteCategories = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/category/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

// create
export const createCategory = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/category",
      data
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};