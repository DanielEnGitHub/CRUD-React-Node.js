import axios from "axios";

export const getCategories = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/category");
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const deleteCategories = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/category/${id}`);
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};