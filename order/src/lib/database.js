import dotenv from "dotenv";
dotenv.config();
import {Pool} from "pg"

const pool = new Pool({
  connectionString: process.env.DATABASE_URL ,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 30000,
  max: 10
})

export default pool;