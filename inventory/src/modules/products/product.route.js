import express from "express";
import {createProductController, getAllProductsController, getProductByIdController} from "./product.controller.js";

const productRouter = express.Router();


productRouter.get("/:id", getProductByIdController);
productRouter.get("/", getAllProductsController);
productRouter.post("/", createProductController);
export default productRouter;