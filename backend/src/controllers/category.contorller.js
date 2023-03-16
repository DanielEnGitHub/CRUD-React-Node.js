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

// POST
export const postCategory = async (req, res) => {
  try {
    const { category, description } = req.body;

    const _category = await Category.create({
      category,
      description,
    });

    res.json({ message: "Category created" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};

// DELETE
export const deleteCategory = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;

    const category = await Category.findOne({
      where: {
        CategoryID: id,
        active: true,
      },
    });

    if (!category) {
      return res.status(404).json({ message: "Error delete" });
    }

    await category.update({ active: false });

    res.json({ message: "Category deleted" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};

// VIEW
export const viewCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({
      where: {
        CategoryID: id,
        active: true,
      },
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};
