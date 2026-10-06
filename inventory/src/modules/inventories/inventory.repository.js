import pool from "../../lib/database.js"

export const createInventory = async (data)=>{
  const {productId,quantity,sale_price} = data;
  const query = `INSERT INTO inventory ("productId",quantity,sale_price) VALUES ($1,$2,$3) RETURNING *`;
  const values = [productId,quantity,sale_price];
  const {rows} = await pool.query(query,values);
  return rows[0];
}

export const getInventoryById = async (inventoryId)=>{
  const query = `SELECT * FROM inventory WHERE id = $1`;
  const values = [inventoryId];
  const {rows} = await pool.query(query,values);
  return rows[0];
}

export const getAllInventories = async ()=>{
  const query = `
  SELECT
    i.id AS inventory_id,
    i.quantity,
    i.sale_price,
    p.id AS product_id,
    p.name,
    p.description,
    p.price
  FROM inventory AS i
  LEFT JOIN products AS p
    ON i."productId" = p.id
`; 
  const {rows} = await pool.query(query);
  return rows;
}

export const updateInventory = async (inventoryId, data) => {
  const allowedFields = ['productId', 'quantity', 'sale_price'];
  const fields = [];
  const values = [];

  for(const field of allowedFields){
    if(data[field] !== undefined){
      if(field === "productId"){
        fields.push(`"${field}" = $${fields.length + 1}`);
      } else{

        fields.push(`${field} = $${fields.length + 1}`);
      }
      values.push(data[field]);
    }
  }
  if(fields.length === 0){
    throw new Error('No valid fields provided for update');
  }
  values.push(inventoryId);
  const query = `UPDATE inventory SET ${fields.join(', ')} WHERE id = $${values.length} RETURNING *`;
  const {rows} = await pool.query(query, values);
  return rows[0];
}