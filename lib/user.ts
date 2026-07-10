import prisma from "./prisma";

export async function getUserFromDb(login:string) {
    return await prisma.user.findFirst({
        where: {
            login
        }
    })
}