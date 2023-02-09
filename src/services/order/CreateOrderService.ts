import prismaClient from "../../prisma";

interface OrderRequest {

    table: number;
    delivery: boolean;
    name : string;
}

class CreateOrderService {

    async execute({ table, delivery, name }: OrderRequest) {

        const order = await prismaClient.order.create({

            data: {
                num_table: table,
                delivery: delivery,
                name: name
            }

        });

        return order;

    }

}

export { CreateOrderService }