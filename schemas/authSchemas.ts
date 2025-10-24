import { z } from "zod";
// import {z} from "../node_modules/zod/index.cjs";

export const signupSchema = z.object({
  firstName: z.string().min(3, "First name must be at least 3 characters"),
  lastName: z.string().optional(),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(5, "Password must be at least 5 characters")
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5)
});
