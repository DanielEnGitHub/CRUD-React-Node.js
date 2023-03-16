import Product from "../models/product.js";

// GET
export const getProduct = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        active: true,
      },
    });

    res.json(product);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};

// POST
export const postProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      quantity,
      price_cost,
      price_sale,
      existence,
    } = req.body;

    const product = await Product.create({
      name,
      description,
      quantity,
      price_cost,
      price_sale,
      existence,
    });

    res.json({ message: "Product created" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};

// // DELETE
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findOne({
      where: {
        ProductID: id,
        active: true,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Error delete" });
    }

    await product.update({ active: false });

    res.json({ message: "Product deleted" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};

// VIEW
export const viewProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: {
        ProductID: id,
        active: true,
      },
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error getting request to backend D:" });
  }
};
