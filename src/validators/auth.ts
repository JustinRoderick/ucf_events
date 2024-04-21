import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().min(2).max(50),
    password: z
      .string()
      .min(8, { message: "Password must be 8 characters long" })
      .max(50),
    confirmPassword: z
      .string()
      .min(8, { message: "Password must be 8 characters long" })
      .max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  email: z.string().min(2).max(50),
  password: z
    .string()
    .min(8, { message: "Password must be 8 characters long" })
    .max(50),
});
