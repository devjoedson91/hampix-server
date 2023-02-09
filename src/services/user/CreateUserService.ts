// o service fará o trabalho com banco de dados e validações

import prismaClient from '../../prisma';
import { hash } from 'bcryptjs';

interface UserRequest { // a tipagem com typescript faz com que esses parametros sejam obrigatorios 

    name: string;
    email: string;
    password: string

}

class CreateUserService {

    // apos receber os dados do controller a partir daqui os dados podem ser enviados para o banco

    async execute({name, email, password}: UserRequest) {

        if (!email) { // verificando se enviou um email

            throw new Error('Email incorrect');
        }

        // verificando se o email ja esta cadastrado

        const userAlreadyExists = await prismaClient.user.findFirst({

            where: {

                email: email

            }

        })

        if (userAlreadyExists) {

            throw new Error('User already exists');

        }

        // cadastrando um usuario no banco

        const passwordHash = await hash(password, 8);

        const user = await prismaClient.user.create({

            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: { // select retorna o que vc quer devolver, nesse caso a senha nao será exibida na requisição

                id: true,
                name: true,
                email: true

            }

        })



        return user;
    }

}

export { CreateUserService }