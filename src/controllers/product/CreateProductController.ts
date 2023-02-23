import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {

    async handle(req: Request, res: Response) {

        const {name, price, description, category_id} = req.body;

        let banner = '';

        const createProductService = new CreateProductService();

        if (!req.file) {

            throw new Error('Error upload file');

        } else {

            const {filename: banner} = req.file;

            const imageUrl = `http://192.168.0.21:3333/files/${banner}`;

            const product = await createProductService.execute({
                name,
                price,
                description,
                banner: imageUrl,
                category_id
            });
    
            return res.json(product);

        }


    }


}

export { CreateProductController }