import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const TOKEN_SECRET = process.env.TOKEN_SECRET || "default_secret";

export interface UserPayload {
  userId: string;
  name: string;
  email: string;
  role: "ADMIN" | "MANAGER" | "STAFF" | "OWNER";
  branchId?: string;
}

export function signJWT(payload: UserPayload): string {
  return jwt.sign(payload, TOKEN_SECRET, { expiresIn: "7d" });
}

export function verifyJWT(token: string): UserPayload | null {
  try {
    return jwt.verify(token, TOKEN_SECRET) as UserPayload;
  } catch {
    return null;
  }
}

export async function getCurrentUser(): Promise<UserPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("aarna_auth_token")?.value;
  if (!token) return null;
  return verifyJWT(token);
}
