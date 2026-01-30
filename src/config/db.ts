import mongoose from "mongoose";

// Connect to MongoDB using the connection string from environment variables
export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

// Ensure this file is treated as a module by TypeScript
export {};