// DONE REVIEWING: GITHUB COMMIT 2️⃣

import {z, ZodType} from "zod"

export type SignUpSchemaParams = {
  type: string
  name: string
  email: string
  emailConfirmation: string
  password: string
  passwordConfirmation: string
  otp: string
}

export const SignUpSchema: ZodType<SignUpSchemaParams> = z
  .object({
    type: z.string().min(1),
    name: z.string().min(4),
    username: z.string().min(4),
    email: z.string().email(),
    emailConfirmation: z.string().email(),
    password: z.string().min(8).max(64),
    passwordConfirmation: z.string(),
    otp: z.string().min(6).max(6)
  })
  .refine((schema) => schema.email === schema.emailConfirmation, {
    message: "Emails do not match",
    path: ["emailConfirmation"]
  })
  .refine((schema) => schema.password === schema.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"]
  })

export type SignInSchemaParams = {
  email: string
  password: string
}

export const SignInSchema: ZodType<SignInSchemaParams> = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(64)
})
