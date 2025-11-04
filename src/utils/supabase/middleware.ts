// 📁 src/utils/supabase/updateSession.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // 👈 utilise ta clé publique réelle
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({ request })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // 🚨 Ne pas ajouter de code ici avant getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // 🔐 Si l'utilisateur n'est pas connecté et qu'il n'est pas sur la page d'auth
  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/sign-in') &&
    !request.nextUrl.pathname.startsWith('/sign-up')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/sign-in'
    return NextResponse.redirect(url)
  }

  // ⚙️ Important : retourne supabaseResponse (cookies synchronisés)
  return supabaseResponse
}

// BLOCKER LES UTILISATEURS à ACCEDER AUX PAGES SELON LEUR ROLE
// import { createServerClient } from '@supabase/ssr'
// import { NextResponse, type NextRequest } from 'next/server'

// export async function updateSession(request: NextRequest): Promise<{
//   response: NextResponse
//   user: any | null
// }> {
//   let supabaseResponse = NextResponse.next({ request })

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll()
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
//           supabaseResponse = NextResponse.next({ request })
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options)
//           )
//         },
//       },
//     }
//   )

//   const {
//     data: { user },
//   } = await supabase.auth.getUser()

//   // 🔐 Si non connecté → redirige vers /sign-in
//   if (
//     !user &&
//     !request.nextUrl.pathname.startsWith('/sign-in') &&
//     !request.nextUrl.pathname.startsWith('/sign-up')
//   ) {
//     const url = request.nextUrl.clone()
//     url.pathname = '/sign-in'
//     return { response: NextResponse.redirect(url), user: null }
//   }

//   // ✅ Retourne toujours un objet { response, user }
//   return { response: supabaseResponse, user }
// }
