import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Email invalide"),
  password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});

export const signUpSchema = z
  .object({
    fullName: z.string().min(2, "Le nom complet doit contenir au moins 2 caractères"),
    email: z.string().email("Email invalide"),
    phone: z
      .string()
      .min(8, "Le numéro de téléphone doit contenir au moins 8 caractères"),
    password: z.string().min(6, "Le mot de passe doit contenir au moins 6 caractères"),
    confirmPassword: z.string().min(6, "La confirmation doit contenir au moins 6 caractères"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });

export type SignInValues = z.infer<typeof signInSchema>;
export type SignUpValues = z.infer<typeof signUpSchema>;


