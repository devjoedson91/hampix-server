// o controller vai receber diretamente a requisição, com ele vamos pegar os parametros da requisição e chamar o service passando os dados necessarios

import { Request, Response } from "express";
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {

    async handle(req: Request, res: Response) { // (typescript) req é do tipo Resquest e permite saber o que tem no Resquest

        const {name, email, password} = req.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, email, password });

        return res.json(user);

    }

}

export { CreateUserController }