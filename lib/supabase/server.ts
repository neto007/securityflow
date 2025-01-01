import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export const createClient = () => {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        async getAll() {
          const allCookies = (await cookieStore).getAll()
          return allCookies.map((cookie: { name: any; value: any }) => ({ name: cookie.name, value: cookie.value }))
        },
        setAll(cookies: { name: string, value: string, options: any }[]) {
          cookies.forEach(async cookie => {
            (await cookieStore).set(cookie.name, cookie.value, cookie.options)
          })
        }
      }
    }
  )
}