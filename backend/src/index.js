import express, { Router } from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(
  "/api",
  Router().get("/", (req, res) => res.send("Hello World!"))
);

app.listen(3000, () => console.log("Server started on port http://localhost:3000"));