import express from "express";
import productRouter from "./products/product.route.js";

const indexRouter = express.Router();


indexRouter.use("/products", productRouter);

export default indexRouter;