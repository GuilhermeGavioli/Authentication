import { Request, Response}  from 'express'
import { LoginRouter } from '../MainRoute/login'

export class LoginAdapter {
    adapt() {
        return async (request: Request, response: Response) => {
            const httpReq = {
                body: request.body,
            }
            const returned = await new LoginRouter().execute(httpReq);
            response.status(returned.statusCode).json({ ...returned.body, token: returned?.token });
         }
    }
}