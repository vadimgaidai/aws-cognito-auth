'use client'

import { SessionProvider } from 'next-auth/react'

interface IAuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: IAuthProviderProps) => (
  <SessionProvider>{children}</SessionProvider>
)

export default AuthProvider
