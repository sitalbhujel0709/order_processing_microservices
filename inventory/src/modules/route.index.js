import express from "express";
import productRouter from "./products/product.route.js";
import inventoryRouter from "./inventories/inventory.route.js"

const indexRouter = express.Router();


indexRouter.use("/products", productRouter);
indexRouter.use("/inventory", inventoryRouter)

export default indexRouter;