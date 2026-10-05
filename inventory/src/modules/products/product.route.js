import express from "express";
import {createProductController, getProductByIdController} from "./product.controller.js";

const productRouter = express.Router();


productRouter.get("/:id", getProductByIdController);
productRouter.post("/", createProductController);
export default productRouter;