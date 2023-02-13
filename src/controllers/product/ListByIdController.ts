import { Request, Response } from "express";
import { ListByIdService } from "../../services/product/ListByIdService";

class ListByIdController {

    async handle(req: Request, res: Response) {

        const product_id = req.query.product_id as string;

        const listById = new ListByIdService();

        const products = await listById.execute({ product_id });

        return res.json(products);

    }

}

export { ListByIdController }