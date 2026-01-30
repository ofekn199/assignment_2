import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.routes";

const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Auth routes
app.use("/auth", authRoutes);

export default app;
export {};