import prismaClient from "../../prisma";

interface ProductRequest {

    product_id: string

}

class ListByIdService {

    async execute({ product_id }: ProductRequest) {

        const findById = await prismaClient.product.findUnique({

            where: {
                id: product_id
            }

        })

        return findById;
        
    }

}

export { ListByIdService }