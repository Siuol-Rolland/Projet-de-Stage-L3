// 📁 proxy.ts
import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export const config = {
  matcher: [
    "/page/admin/:path*",
    "/page/teacher/:path*",
    "/page/students/:path*",
    "/sign-in",
    "/sign-up",
  ],
};

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 🚫 Ignorer API, fichiers statiques, Next internals
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/magic-link") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // 🔐 Supabase session
  const { response, user } = await updateSession(request);

  // ❌ Pas connecté
  if (!user) {
    return response; // redirection déjà gérée vers /sign-in
  }

  const role = user.user_metadata?.role ?? null;

  // 🔒 Protection par rôle
  if (
    role === "student" &&
    (pathname.startsWith("/page/admin") ||
      pathname.startsWith("/page/teacher"))
  ) {
    return NextResponse.redirect(
      new URL("/page/students", request.url)
    );
  }

  if (
    role === "teacher" &&
    (pathname.startsWith("/page/admin") ||
      pathname.startsWith("/page/students"))
  ) {
    return NextResponse.redirect(
      new URL("/page/teacher", request.url)
    );
  }

  if (
    role === "admin" &&
    (pathname.startsWith("/page/students") ||
      pathname.startsWith("/page/teacher"))
  ) {
    return NextResponse.redirect(
      new URL("/page/admin", request.url)
    );
  }

  // ✅ OK → continuer
  return response ?? NextResponse.next();
}
