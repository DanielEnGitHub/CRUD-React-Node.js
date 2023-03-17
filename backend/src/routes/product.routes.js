import { Router } from "express";
import { deleteProduct, getProduct, postProduct, updateProduct, viewProduct } from "../controllers/product.contorller.js";

const router = Router();

// GET
router.get("/product", getProduct);

// POST
router.post("/product/", postProduct);

// DELETE
router.delete("/product/:id", deleteProduct);

// VIEW
router.get("/product/:id", viewProduct);

// UPDATE
router.put("/product/:id", updateProduct);

export default router;
