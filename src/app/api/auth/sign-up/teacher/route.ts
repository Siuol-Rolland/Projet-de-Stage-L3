"use server"
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server"; // ton helper server Supabase
import { prisma } from "@/lib/db/db"; // ton instance Prisma
import bcrypt from "bcryptjs";

function validateSignup(body: any) {
    const errors: string[] = [];


    if (!body.fullName || body.fullName.trim().length < 2) {
        errors.push("Le nom complet doit contenir au moins 2 caractères.");
    }  

    if (!body.token) {
        errors.push("Token d’invitation manquant.");
    }

    const password = body.password ?? "";

    const rules = [
        { test: /.{8,}/, msg: "≥ 8 caractères" },
    ];

    return errors;
}

async function verifyInviteTokenOnServer(token: string, baseUrl: string) {
    const url = new URL(`/api/auth/invite/verify-token?token=${encodeURIComponent(token)}`, baseUrl).toString();
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || "Token invalide");
    return json;
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validationErrors = validateSignup(body);
        if (validationErrors.length > 0) {
            return NextResponse.json({ error: validationErrors.join(" | ") }, { status: 400 });
        }

        const { fullName, email, password, token } = body;
        
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? `http://localhost:${process.env.PORT ?? 3000}`;

        let inviteData;
        try {
            inviteData = await verifyInviteTokenOnServer(token, baseUrl);
        } catch (err: any) {
            return NextResponse.json({ error: err.message || "Token invalide ou expiré" }, { status: 401 });
        }

        if (inviteData.email && inviteData.email !== email) {
            return NextResponse.json({ error: "L'email du token ne correspond pas." }, { status: 400 });
        }

        const supabase = await createClient(); // ✅ on attend la Promesse
        const { data: authData, error: authError } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                role: "teacher", // 👈 rôle ajouté automatiquement
                },
            },
        });

        if (authError) {
            // supabase peut renvoyer des erreurs déjà existantes (user exists, weak password, etc.)
            return NextResponse.json({ error: authError.message }, { status: 400 });
        }

        const user = authData.user;
        if (!user) {
            return NextResponse.json({ error: "Impossible de créer l'utilisateur Supabase." }, { status: 500 });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        await prisma.pROFESSEURS.create({
            data: {
                user_id: user.id,
                Nom_Prof: fullName,
                Email_Prof: email,
                MotPass_Prof: hashedPassword,
                // si tu veux lier quotas/paie, ajoute id_Quotas / id_Paie ...
            },
        });

        return NextResponse.json({ message: "Administrateur créé avec succès" }, { status: 201});
    } catch (error: any) {
        console.error("Erreur d'inscription admin:", error);
        return NextResponse.json({ error: error.message ?? "Erreur serveur" }, { status: 500 });
    }
}