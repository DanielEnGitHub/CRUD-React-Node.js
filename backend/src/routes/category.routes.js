import { Router } from "express";
import { getCategory } from "../controllers/category.contorller.js";

const router = Router();

// GET
router.get("/category", getCategory);

export default router;
