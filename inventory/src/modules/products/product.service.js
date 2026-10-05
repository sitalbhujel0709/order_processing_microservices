import { getProductById, createProduct } from "./product.repository.js";
export const getProductByIdService = async (productId) => {
  try {
    const product = await getProductById(productId);
    return product;
  } catch (error) {
    throw new Error(`Error fetching product by ID: ${error.message}`);
  }
}

export const createProductService = async (product) => {
  try {
    const newProduct = await createProduct(product);
    return newProduct;
  } catch (error) {
    throw new Error(`Error creating product: ${error.message}`);
  }
}