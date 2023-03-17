import express from "express";
import morgan from "morgan";
import cors from "cors";

// import routes
import CategoryRouter from "./routes/category.routes.js";
import ProductRouter from "./routes/product.routes.js";

// express
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
app.use("/api", CategoryRouter);
app.use("/api", ProductRouter);

export default app;