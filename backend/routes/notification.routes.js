import { Router } from "express";
import { protectRoutes } from "../middleware/protectRoutes.js";
import {
  getNotifications,
  deleteNotifications,
  deleteOneNotification,
} from "../controllers/notification.controllers.js";

const notificationRoutes = Router();

notificationRoutes.get("/", protectRoutes, getNotifications);
notificationRoutes.delete("/", protectRoutes, deleteNotifications);
notificationRoutes.delete("/:id", protectRoutes, deleteOneNotification);

export default notificationRoutes;
