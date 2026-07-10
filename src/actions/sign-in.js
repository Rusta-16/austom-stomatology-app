'use server'
import { signIn } from "../../auth";

export async function SignInWithCredentionals(login, password) {
    try {
        const result = await signIn('credentials',{
            login,
            password,
            redirect: false
        })
        return result
    } catch (error) {
        console.error("Ошибка авторизации", error)
        throw error
        
    }
}