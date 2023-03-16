import { Router } from "express";
import { getCategory, deleteCategory, postCategory, viewCategory } from "../controllers/category.contorller.js";

const router = Router();

// GET
router.get("/category", getCategory);

// POST
router.post("/category/", postCategory);

// DELETE
router.delete("/category/:id", deleteCategory);

// VIEW
router.get("/category/:id", viewCategory);

export default router;
