import {createInventory, getAllInventories, getInventoryById, updateInventory} from "./inventory.repository.js"

export const createInventoryService = async(data)=>{
  const inventory = await createInventory(data);
  return inventory;
}

export const getAllInventoriesService = async()=>{
  const inventories = await getAllInventories();
  return inventories;
}




export const updateInventoryService = async(inventoryId, data)=>{
  const Inventory = await getInventoryById(inventoryId);
  if(!Inventory){
    throw new Error(`Inventory with ID ${inventoryId} not found`);
  }
  data.quantity = Inventory.quantity - data.quantity;
  const updatedInventory = await updateInventory(inventoryId, data);
  return updatedInventory;
}