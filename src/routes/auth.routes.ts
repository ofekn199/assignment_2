import { Router } from "express";
import { register, login } from "../controllers/auth.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { refreshAccessToken } from "../controllers/auth.controller";

const router = Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Refresh token route
router.post("/refresh-token", refreshAccessToken);

// Protected route for testing authentication
router.get("/me", authenticate, (req, res) => {
  res.status(200).json({
    message: "Authenticated",
    user: (req as any).user,
  });
});

export default router;

// Force TypeScript to treat this file as a module
export {};