import express from "express";
import { createInventoryController } from "./inventory.controller.js";

const inventoryRouter = express.Router();

inventoryRouter.post('/',createInventoryController)

export default inventoryRouter