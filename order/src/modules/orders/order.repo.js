import pool from '../../lib/database.js';

export const createOrder = async (order)=>{
  const {product_id, quantity, unit_price} = order;
  const result = await pool.query(
    'INSERT INTO orders (product_id, quantity, unit_price) VALUES ($1, $2, $3) RETURNING *',
    [product_id, quantity, unit_price]
  );
  return result.rows[0];
}
export const fetchProductById = async (product_id) => {
  const result = await fetch(`${process.env.INVENTORY_SERVICE_URL}/products/${product_id}`);
  
  return await result.json();
}