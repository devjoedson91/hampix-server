import prismaClient from "../../prisma";

class DetailUserService {

    async execute(user_id: string) {

        // buscando dados do usuario no banco

        const user = await prismaClient.user.findFirst({
            where: {
                id: user_id
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;

    }

}

export { DetailUserService }

