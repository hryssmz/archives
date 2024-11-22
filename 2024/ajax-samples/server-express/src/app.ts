// app.ts
import cors from "cors";
import express from "express";
import logger from "morgan";
import apiRouter from "./routes/api";

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(apiRouter);

export default app;
