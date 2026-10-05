import {createProductService, getProductByIdService} from "./product.service.js";

export const getProductByIdController = async (req,res)=>{
  try {
    const {id} = req.params;
    const product = await getProductByIdService(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

export const createProductController = async (req,res)=>{
  try {
    const {name, description, price} = req.body;
    const product = await createProductService({name, description, price});
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}