import express, { Request, Response } from "express";

const app = express();

// Parse incoming JSON requests
app.use(express.json());

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

export default app;

// Force TypeScript to treat this file as a module
export {};