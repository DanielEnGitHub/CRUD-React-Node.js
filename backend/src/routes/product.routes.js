import { Router } from "express";
import { deleteProduct, getProduct, postProduct, viewProduct } from "../controllers/product.contorller.js";

const router = Router();

// GET
router.get("/product", getProduct);

// POST
router.post("/product/", postProduct);

// DELETE
router.delete("/product/:id", deleteProduct);

// VIEW
router.get("/product/:id", viewProduct);

export default router;
