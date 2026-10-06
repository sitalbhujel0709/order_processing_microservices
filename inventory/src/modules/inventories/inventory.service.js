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
  const findInventory = await getInventoryById(inventoryId);
  if(!findInventory){
    throw new Error(`Inventory with ID ${inventoryId} not found`);
  }
  const updatedInventory = await updateInventory(inventoryId, data);
  return updatedInventory;
}