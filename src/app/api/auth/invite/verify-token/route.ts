import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json({ error: "Token manquant" }, { status: 400 });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
    return NextResponse.json({ success: true, email: decoded.email });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Lien invalide ou expiré" }, { status: 401 });
  }
}
