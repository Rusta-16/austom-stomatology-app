import { object, string } from "zod"

export const signInSchema = object({
  login: string({ error: "Email is required" })
    .min(1, "login is required"),
  password: string({ error: "Password is required" })
    .min(1, "Password is required")
    .min(6, "Password must be more than 6 characters")
    .max(32, "Password must be less than 32 characters"),
})