import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();
const app = express();

app.get("/api/auth", authRoutes);

export default app;
