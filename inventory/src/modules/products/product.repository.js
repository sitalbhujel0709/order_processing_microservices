import pool from "../../lib/database.js";

export const getProductById = async (productId) => {
  const query = `SELECT * FROM products WHERE id =  $1`
  const values = [productId];
  const {rows} = await pool.query(query, values);
  return rows[0];
}
export const getAllProducts = async ()=>{
  const query = `SELECT * FROM products`
  const {rows} = await pool.query(query);
  return rows
}
export const createProduct  = async (product)=>{
  const {name, description, price} = product;
  const query = `INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *`;
  const values = [name, description, price];
  const {rows} = await pool.query(query, values);
  return rows[0]; 
}