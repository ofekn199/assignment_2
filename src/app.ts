import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.routes";
import usersRoutes from "./routes/users.routes";

const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Auth routes
app.use("/auth", authRoutes);
// User routes
app.use("/users", usersRoutes);
console.log("✅ Users routes registered at /users");

export default app;
export {};