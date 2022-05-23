import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { IReturnedObject } from '../Interfaces/ReturnedObject';
import { endpoints } from '../../endpoints';
import { validateCredentials } from '../../methods/validateCredentials';
import { QueryRepository } from '../Repository/query';
import { InsertRepository } from '../Repository/insert';



export class RegisterUseCase {
    async execute(name: string, email: string, password: string): Promise<IReturnedObject> { 
        const isValid = validateCredentials(email, password, name);
        if (isValid.statusCode !== 200) return { statusCode: isValid.statusCode, body: isValid.body };

        const foundUser = await new QueryRepository().execute(email);
        if (foundUser) return { statusCode: 400, body: { message: "User already exists." } }
          
        const hashedPassword = await bcrypt.hash(password, 10);

        //add id latter on...

        await new InsertRepository().execute({  name, email, password: hashedPassword })
    
        const token = jwt.sign({ email }, endpoints.secretToken, {expiresIn: 60 * 5} )
        return { statusCode: 200, body: {message: "Success."}, token }
    }
}