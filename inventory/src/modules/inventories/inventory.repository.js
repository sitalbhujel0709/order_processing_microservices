import pool from "../../lib/database.js"

export const createInventory = async (data)=>{
  const {productId,quantity,sale_price} = data;
  const query = `INSERT INTO inventory ("productId",quantity,sale_price) VALUES ($1,$2,$3) RETURNING *`;
  const values = [productId,quantity,sale_price];
  const {rows} = await pool.query(query,values);
  return rows[0];
}