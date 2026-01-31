import { Router } from "express";
import { getAllUsers, getUserById , updateUser, deleteUser } from "../controllers/users.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

// Get all users
router.get("/", authenticate, getAllUsers);

// Get user by id 
router.get("/:id", authenticate, getUserById);

// Update user by id
router.put("/:id", authenticate, updateUser);

// Delete user
router.delete("/:id", authenticate, deleteUser);

export default router;

// Force TypeScript to treat this file as a module
export {};