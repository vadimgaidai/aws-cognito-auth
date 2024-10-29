import NextAuth from 'next-auth/next'
import authConfig from '@/src/libs/authConfig'

const handler = NextAuth(authConfig)

export { handler as GET, handler as POST }
