import { Router } from "express";
import { register } from "../controllers/auth.controller";

const router = Router();

// Register route
router.post("/register", register);

export default router;

// Force TypeScript to treat this file as a module
export {};