import { Request, Response } from 'express'
import { RegisterRouter } from '../MainRoute/register';

export class RegisterAdapter {
    adapt() {
        return async (request: Request, response: Response) => {
            const httpReq = {
                body: request.body
            }
            const returned = await new RegisterRouter().execute(httpReq);
            response.status(returned.statusCode).json({ body: returned.body, token: returned?.token });
         }
    }
}


