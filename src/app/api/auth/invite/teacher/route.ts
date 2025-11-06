"use server"
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const JWT_SECRET = process.env.JWT_SECRET!;
const SMTP_USER = process.env.SMTP_USER!;
const SMTP_PASS = process.env.SMTP_PASSWORD!;
const SMTP_HOST = process.env.SMTP_HOST!;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465");

export async function POST(req: Request) {
    try{
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json({ error: "Email manquant" }, { status: 400 });
        }

        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

        const inviteLink = `${process.env.NEXT_PUBLIC_SITE_URL}/magic-link/teacher?token=${token}`

        const teacher = nodemailer.createTransport({
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: true,
            auth: { user: SMTP_USER, pass: SMTP_PASS },
        })

        const mailOptions = {
            from: `DentalCare <${SMTP_USER}>`,
            to: email,
            subject: "Invitation à rejoindre la plateforme DentalCare",
            html: `
                <h2>Bonjour,</h2>
                <p> vous avez été inviter à vous inscrire en tant que professeur.</p>
                <p>Cliquez ici pour créer votre compte :</p>
                <a href="${inviteLink}" target="_blank">${inviteLink}</a>
                <p><em>Ce lien expire dans 1 heure.</em></p>
            `,
        };

        await teacher.sendMail(mailOptions);
        return NextResponse.json({ success: true, message: "Invitation envoyée !" });
    } catch (error) {
    console.error("Erreur d’envoi :", error);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}