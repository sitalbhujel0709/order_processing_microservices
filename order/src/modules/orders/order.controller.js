import { createOrderService } from "./order.service.js";

export const createOrderController = async (req,res)=>{
  try {
    const order = await createOrderService(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}