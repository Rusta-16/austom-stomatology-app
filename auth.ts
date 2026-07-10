import NextAuth from "next-auth"
import { ZodError } from "zod"
import Credentials from "next-auth/providers/credentials"
import { signInSchema } from "./lib/zod"
// Your own logic for dealing with plaintext password strings; be careful!
import bcryptjs from "bcryptjs"
import { PrismaAdapter } from "@auth/prisma-adapter"
import prisma from "./lib/prisma"
import { getUserFromDb } from "./lib/user"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                login: {
                    label: 'Логин',
                    type: 'text',
                    placeholder: 'логин'
                },
                password: {
                    label: 'Пароль',
                    type: 'password',
                    placeholder: '••••••••'
                },
            },
            authorize: async (credentials) => {
                try {
                    if (!credentials?.login || !credentials.password) {
                        throw new Error('Логин и пароль обязательны')

                    }
                    const { login, password } = await signInSchema.parseAsync(credentials)

                    const user = await getUserFromDb(login)

                    if (!user || !user.password) {
                        throw new Error("Неверные данные")
                    }
                    const isPasswordValid = await bcryptjs.compare(
                        password,
                        user.password
                    )
                    if (!isPasswordValid) {
                        throw new Error("Неверные данные")
                    }
                    return { id: user.id, login: user.login }
                } catch (error) {
                    if (error instanceof ZodError) {
                        return null
                    }
                    return null
                }
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 3600
    },
    secret: process.env.AUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        }
    }
})