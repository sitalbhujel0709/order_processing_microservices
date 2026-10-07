import {createOrder, fetchProductById} from './order.repo.js';

export const createOrderService = async (order) => {
  const validProduct = await fetchProductById(order.product_id);
  console.log('validProduct', validProduct);
  if (validProduct.error) {
    throw new Error('Invalid product');
  }
  return createOrder(order);
}