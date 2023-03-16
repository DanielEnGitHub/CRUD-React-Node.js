import Category from "../models/category.js";

// GET
export const getCategory = async (req, res) => {
  try {
    const category = await Category.findAll({
      where: {
        active: true,
      },
    });

    res.json(category);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};
