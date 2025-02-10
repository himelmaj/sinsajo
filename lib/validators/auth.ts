import { z } from "zod"


export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    rememberMe: z.boolean().default(false)
})


export const SignUpSchema = z.object({
    name: z.string().min(2).max(150).regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
    email: z.string().email(),
    password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
    password_confirmation: z.string().min(8)
}).refine((values) => {
    return values.password === values.password_confirmation
},
    {
        message: "Passwords do not match",
        path: ["password_confirmation"]
    })