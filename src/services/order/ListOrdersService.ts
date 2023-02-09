import prismaClient from "../../prisma";

class ListOrdersService {

    async execute() {

        const orders = await prismaClient.order.findMany({

            // lista todas as orders que sairam de rascunho (foram enviados para cozinha)

            where: {
                draft: false,
                status: false
            },
            orderBy: {
                created_at: 'desc' // ordenar pelos menos recentes
            }

        });

        return orders;

    }

}

export { ListOrdersService }