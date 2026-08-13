import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "username must be atleast 2 character")
  .max(20, "username must not be more than 20 character")
  .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain specieal character");

export const signUpSchema = z.object({
  userName: usernameValidation,
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 character" }),
});
