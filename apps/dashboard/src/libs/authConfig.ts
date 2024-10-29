import { NextAuthOptions } from 'next-auth'

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [],
  callbacks: {},
  debug: true,
}

export default authOptions
