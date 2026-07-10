'use server'
import { signOut } from "../../auth"

export async function SignOutFunc() {
    try {
        const result = await signOut({redirect: false})
        return result
    } catch (error) {
        console.error("Ошибка авторизации", error)
        throw error

    }
}