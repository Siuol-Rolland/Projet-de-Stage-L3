import { prisma } from "@/lib/db/db";
import { NextResponse } from "next/server";

/* TYPES */
export type UserRole = "Administrateur" | "Professeur" | "Étudiant";

export type AppUser = {
  id: string;
  name: string;
  email: string;
  role: UserRole;
};

/* API GET /api/users */
export async function GET() {
  try {
    const admins = await prisma.aDMINISTRATEUR.findMany({
      select: {
        ID_Admin: true,
        Nom_Admin: true,
        Email_Admin: true,
      },
    });

    const profs = await prisma.pROFESSEURS.findMany({
      select: {
        ID_Prof: true,
        Nom_Prof: true,
        Email_Prof: true,
      },
    });

    const etudiants = await prisma.eTUDIANT.findMany({
      select: {
        ID_Etudiant: true,
        FullName_Et: true,
        Email_Et: true,
      },
    });

    const users: AppUser[] = [
      ...admins.map(a => ({
        id: `admin-${a.ID_Admin}`,
        name: a.Nom_Admin,
        email: a.Email_Admin,
        role: "Administrateur" as UserRole, // <-- important !
      })),
      ...profs.map(p => ({
        id: `prof-${p.ID_Prof}`,
        name: p.Nom_Prof,
        email: p.Email_Prof,
        role: "Professeur" as UserRole,
      })),
      ...etudiants.map(e => ({
        id: `etudiant-${e.ID_Etudiant}`,
        name: e.FullName_Et,
        email: e.Email_Et,
        role: "Étudiant" as UserRole,
      })),
    ];

    return NextResponse.json(users);
  } catch (error) {
    console.error("Erreur API users :", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
