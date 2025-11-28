"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { PrismaClient } from "../../../../../generated/prisma";

const prisma = new PrismaClient();

export async function SignInAction(formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) throw new Error("Email et mot de passe requis.");

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Email ou mot de passe incorrect.");

  const user = data.user;

  let role = user.user_metadata?.role ?? null;

  if (!role) {
    const admin = await prisma.aDMINISTRATEUR.findUnique({ where: { user_id: user.id } });
    if (admin) role = "admin";
    else {
      const prof = await prisma.pROFESSEURS.findUnique({ where: { user_id: user.id } });
      if (prof) role = "teacher";
      else {
        const etu = await prisma.eTUDIANT.findUnique({ where: { user_id: user.id } });
        if (etu) role = "student";
      }
    }
  }

  if (!role) throw new Error("Impossible de déterminer votre rôle.");

  // Redirection
  switch (role) {
    case "ADMIN":
      redirect("/page/admin");
    case "PROF":
      redirect("/page/teacher");
    case "ETUDIANT":
      redirect("/page/students");
    default:
      throw new Error("Rôle inconnu.");
  }
}
