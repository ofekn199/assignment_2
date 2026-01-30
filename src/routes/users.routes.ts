import { Router } from "express";
import { getAllUsers, getUserById } from "../controllers/users.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Get all users (protected)
router.get("/", authenticate, getAllUsers);

// Get user by id (protected)
router.get("/:id", authenticate, getUserById);

export default router;

// Force TypeScript to treat this file as a module
export {};