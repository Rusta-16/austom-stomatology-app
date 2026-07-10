import bcryptjs from "bcryptjs"
export async function saltAndHashPassword(password: string) {
    const saltRounds = 10
    return await bcryptjs.hash(password, saltRounds)
}