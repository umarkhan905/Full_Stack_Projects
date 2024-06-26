import { Router } from "express";
import {
  signup,
  login,
  logout,
  getCurrentUser,
} from "../controllers/auth.controllers.js";
import { protectRoutes } from "../middleware/protectRoutes.js";

const authRoutes = Router();

authRoutes.get("/", protectRoutes, getCurrentUser);
authRoutes.post("/signup", signup);
authRoutes.post("/login", login);
authRoutes.post("/logout", logout);

export default authRoutes;
