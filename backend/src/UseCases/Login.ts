import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import { endpoints } from '../../endpoints';
import { IReturnedObject } from "../Interfaces/ReturnedObject";
import { QueryRepository } from "../Repository/query";
import { validateCredentials } from "../../methods/validateCredentials";
import validateToken from "../../methods/validateToken";


export class LoginUseCase {
    async execute(email: string, password: string, tokenFromHeader?: string | undefined): Promise<IReturnedObject> {
        const isValid = validateCredentials(email, password);
        if (isValid.statusCode !== 200) return { statusCode: isValid.statusCode, body: isValid.body };

        if (tokenFromHeader) {
            const isValid = validateToken(tokenFromHeader);
            if (!isValid) return { statusCode: 401, body: { message: "Invalid token" } }
        }

        const foundUser = await new QueryRepository().execute(email);
        if (!foundUser) return { statusCode: 404, body: { message: "User does not exist." } }
        const match = await bcrypt.compare(password, foundUser.password)
        if (!match) return { statusCode: 400, body: { message: "Incorrect password." } }

        //transform it in a function generatetoken
        const token = jwt.sign({ email }, endpoints.secretToken, {expiresIn: 60 * 5} ) //5 min (test)
        return { statusCode: 200, body: { message: "Success" }, token }
    }
}
