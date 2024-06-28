import { Router } from "express";
import { protectRoutes } from "../middleware/protectRoutes.js";
import {
  createPost,
  deletePost,
  commentOnPost,
  likeUnlikePost,
  getAllPosts,
  getLikedPosts,
  getFollowingPosts,
  getUserPosts,
} from "../controllers/post.controllers.js";

const postRoutes = Router();

postRoutes.get("/all", protectRoutes, getAllPosts);
postRoutes.get("/following", protectRoutes, getFollowingPosts);
postRoutes.get("/likes/:id", protectRoutes, getLikedPosts);
postRoutes.get("/user/:username", protectRoutes, getUserPosts);
postRoutes.post("/create", protectRoutes, createPost);
postRoutes.post("/like/:id", protectRoutes, likeUnlikePost);
postRoutes.post("/comment/:id", protectRoutes, commentOnPost);
postRoutes.delete("/:id", protectRoutes, deletePost);

export default postRoutes;
