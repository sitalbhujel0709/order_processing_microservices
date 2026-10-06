import express from "express";
import { createInventoryController, getAllInventoriesController, updateInventoryController } from "./inventory.controller.js";

const inventoryRouter = express.Router();

inventoryRouter.post('/',createInventoryController)
inventoryRouter.get('/',getAllInventoriesController)
inventoryRouter.put('/:id', updateInventoryController)  

export default inventoryRouter