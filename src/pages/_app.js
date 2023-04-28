import '@/styles/globals.css'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

export default function App({ Component, pageProps }) {
  return( 
    <SessionContextProvider supabaseClient={createBrowserSupabaseClient()}>
      <Component {...pageProps} />
    </SessionContextProvider>
  )
}
