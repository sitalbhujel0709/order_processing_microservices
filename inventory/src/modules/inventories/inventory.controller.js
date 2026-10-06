import {createInventoryService,getAllInventoriesService,updateInventoryService} from "./inventory.service.js"

export const createInventoryController = async (req,res)=>{
  try {
    const inventory = await createInventoryService(req.body)
    return res.status(201).json(inventory)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getAllInventoriesController = async (req,res)=>{
  try {
    const inventories = await getAllInventoriesService();
    return res.status(200).json(inventories);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export const updateInventoryController = async (req,res)=>{
  try {
    const { id } = req.params;  
    const updatedInventory = await updateInventoryService(id, req.body);
    return res.status(200).json(updatedInventory);
  } catch (error) {
    console.log(error)
    return res.status(500).json(error);
  }
}