import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {

    sub: string; // id do usuario que esta tentando logar
    
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

    // receber o token

    const authToken = req.headers.authorization;

    // verificando se o token existe

    if (!authToken) return res.status(401).end(); // barrando a requisição

    // validar token

    const [, token] = authToken.split(' ');

    try {

        const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

        // recuperar o id do token e colocar dentro de uma variavel user_id dentro da req

        req.user_id = sub;

        return next();

    } catch(err) {

        return res.status(401).end();
    }

    

}