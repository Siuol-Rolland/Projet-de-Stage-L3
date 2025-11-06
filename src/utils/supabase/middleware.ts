// BLOCKER LES UTILISATEURS à ACCEDER AUX PAGES SELON LEUR ROLE
// 📁 src/utils/supabase/updateSession.ts
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest): Promise<{
  response: NextResponse
  user: any | null
}> {
  let supabaseResponse = NextResponse.next({ request })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
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

  // Récupère l'utilisateur connecté
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Redirige vers /sign-in si non connecté
  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/sign-in') &&
    !request.nextUrl.pathname.startsWith('/sign-up')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/sign-in'
    return { response: NextResponse.redirect(url), user: null }
  }

  // Retourne toujours { response, user }
  return { response: supabaseResponse, user }
}
