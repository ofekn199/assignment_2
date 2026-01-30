import jwt from "jsonwebtoken";
import crypto from "crypto";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_EXPIRES_IN = "15m";

export interface JwtPayload {
  userId: string;
  email: string;
}

export function generateAccessToken(payload: JwtPayload): string {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
}
export function generateRefreshToken(): string {
  return crypto.randomUUID();
}
// Force TypeScript to treat this file as a module
export {};