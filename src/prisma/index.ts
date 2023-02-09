import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default prismaClient; // com export default o prismaClient será importado em outro arquivo sem utilizar {}