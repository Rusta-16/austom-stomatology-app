'use server'
import { saltAndHashPassword } from "../../lib/password"
import prisma from "../../lib/prisma"

export async function createUser(formData) {
  const data = {
    login: formData.login,
    password: formData.password
  }
  const hashedPassword = await saltAndHashPassword(data.password)
  data.password = hashedPassword

  try {
    const user = await prisma.user.create({ data })
    console.log('Пользователь создан')
    return { success: true }
  } catch (er) {
    return {
      success: false, error: er.message
    }

  }

}