import express from "express";
import morgan from "morgan";

// import routes
import CategoryRouter from "./routes/category.routes.js";

// express
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api", CategoryRouter);

export default app;