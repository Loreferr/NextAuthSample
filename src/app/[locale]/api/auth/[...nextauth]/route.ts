import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials, req) {
        console.log({ credentials });
        try {
          const res = await fetch("http://localhost:8080/api/auth/login", {
            headers: { "Content-Type": "application/json" },
            method: "POST",

            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });
          const user = await res.json();

          if (res.ok) {
            return user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Errore durante la registrazione:", error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        // Note that this if condition is needed
        token.user = { ...user };
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.user) {
        // Note that this if condition is needed
        session.user = token.user;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
