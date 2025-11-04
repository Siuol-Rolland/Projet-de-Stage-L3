import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  return await updateSession(request)

  
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    
  ],
}

// // 📁 src/middleware.ts
// import { NextResponse, type NextRequest } from 'next/server'
// import { updateSession } from '@/utils/supabase/middleware'

// export async function middleware(request: NextRequest) {
//   // 🚫 Ignore les routes API et statiques
//   if (
//     request.nextUrl.pathname.startsWith('/api') ||
//     request.nextUrl.pathname.startsWith('/_next') ||
//     request.nextUrl.pathname.includes('.')
//   ) {
//     return NextResponse.next()
//   }

//   // 🧩 Récupère toujours { response, user }
//   const { response, user } = await updateSession(request)

//   // Si l’utilisateur est null → redirection déjà faite dans updateSession
//   if (!user) return response

//   // 🔍 Vérifie le rôle
//   const role = user?.user_metadata?.role ?? null
//   const path = request.nextUrl.pathname

//   // 🔒 Règles de restriction
//   if (role === 'student' && (path.startsWith('/page/admin') || path.startsWith('/page/teacher'))) {
//     return NextResponse.redirect(new URL('/page/students', request.url))
//   }

//   if (role === 'teacher' && (path.startsWith('/page/admin') || path.startsWith('/page/students'))) {
//     return NextResponse.redirect(new URL('/page/teacher', request.url))
//   }

//   if (role === 'admin' && (path.startsWith('/page/students') || path.startsWith('/page/teacher'))) {
//     return NextResponse.redirect(new URL('/page/admin', request.url))
//   }

//   // ✅ Autorisé
//   return response
// }

// export const config = {
//   matcher: [
//     '/page/admin/:path*',
//     '/page/teacher/:path*',
//     '/page/students/:path*',
//     '/sign-in',
//     '/sign-up',
//   ],
// }
