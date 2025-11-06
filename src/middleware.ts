// 📁 src/middleware.ts
import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 🚫 1️⃣ On ignore TOUTES les routes API et statiques
  if (
    pathname.startsWith('/api/'),
    pathname.startsWith('/_next'),
    pathname.startsWith('/magic-link'),
    pathname.includes('.') // fichiers (images, js, etc.)
  ) {
    return NextResponse.next()
  }

  // 🧩 2️⃣ On gère la session Supabase
  const { response, user } = await updateSession(request)
  if (!user) return response // redirection vers /sign-in déjà gérée

  // 🔎 3️⃣ Vérifie le rôle de l’utilisateur
  const role = user?.user_metadata?.role ?? null

  // 🔒 4️⃣ Protection des pages selon le rôle
  if (role === 'student' && (pathname.startsWith('/page/admin') || pathname.startsWith('/page/teacher'))) {
    return NextResponse.redirect(new URL('/page/students', request.url))
  }

  if (role === 'teacher' && (pathname.startsWith('/page/admin') || pathname.startsWith('/page/students'))) {
    return NextResponse.redirect(new URL('/page/teacher', request.url))
  }

  if (role === 'admin' && (pathname.startsWith('/page/students') || pathname.startsWith('/page/teacher'))) {
    return NextResponse.redirect(new URL('/page/admin', request.url))
  }

  // ✅ 5️⃣ Si tout est OK
  return response
}

// ✅ 6️⃣ Matcher — seulement sur les pages protégées, pas sur /api/*
export const config = {
  matcher: [
    '/page/admin/:path*',
    '/page/teacher/:path*',
    '/page/students/:path*',
    '/sign-in',
    '/sign-up',
  ],
}
