import 'dotenv/config';
import express from "express";
import cors from "cors";
import indexRouter from './src/modules/index.route.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1',indexRouter)

export default app;