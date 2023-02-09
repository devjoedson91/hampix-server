import crypto from 'crypto'; // o crypto renomeia os arquivos com nomes iguais
import multer from 'multer';

import { extname, resolve } from 'path';

export default {

    upload(folder: string) { 

        return {

            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),    // __dirname é o diretorio desse arquivo
                filename: (request, file, callback) => { // ver documentação do multer

                    const fileHash = crypto.randomBytes(16).toString('hex');
                    const fileName = `${fileHash}-${file.originalname}`;

                    return callback(null, fileName);

                }
                 
            })
        }

    }

}