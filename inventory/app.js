import 'dotenv/config';
import express from "express";
import indexRouter from "./src/modules/route.index.js";

const app = express();

app.use(express.json());


app.use("/api/v1", indexRouter);

export default app;