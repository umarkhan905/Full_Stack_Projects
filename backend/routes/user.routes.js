import { Router } from "express";
import { protectRoutes } from "../middleware/protectRoutes.js";
import {
  getUserProfile,
  followUnfollowUser,
  getSuggestedUsers,
  updateUser,
} from "../controllers/user.controllers.js";

const userRoutes = Router();

userRoutes.get("/profile/:username", protectRoutes, getUserProfile);
userRoutes.get("/suggested", protectRoutes, getSuggestedUsers);
userRoutes.post("/follow/:id", protectRoutes, followUnfollowUser);
userRoutes.post("/update", protectRoutes, updateUser);

export default userRoutes;
