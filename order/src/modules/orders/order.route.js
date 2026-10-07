import express from 'express';
import { createOrderController } from './order.controller.js';

const orderRouter = express.Router();

orderRouter.post('/',createOrderController)
export default orderRouter;