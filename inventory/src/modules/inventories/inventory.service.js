import {createInventory} from "./inventory.repository.js"

export const createInventoryService = async(data)=>{
  const inventory = await createInventory(data);
  return inventory;
}