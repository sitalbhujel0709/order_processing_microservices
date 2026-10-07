import express from 'express';
import orderRouter from './orders/order.route.js';
const indexRouter = express.Router();

indexRouter.use('/order', orderRouter);

export default indexRouter;