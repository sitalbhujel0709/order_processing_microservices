import {createInventoryService} from "./inventory.service.js"

export const createInventoryController = async (req,res)=>{
  try {
    const inventory = await createInventoryService(req.body)
    return res.status(201).json(inventory)
  } catch (error) {
    res.status(500).json(error)
  }
}