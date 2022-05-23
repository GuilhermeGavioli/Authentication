import { IReturnedObject } from "../Interfaces/ReturnedObject";
import { LoginUseCase } from "../UseCases/Login";

export class LoginRouter {
    async execute(HttpRequest: any): Promise<IReturnedObject> {
        const tokenFromHeader = HttpRequest.headers?.authorization
        const { email, password } = HttpRequest.body
        const returned = await new LoginUseCase().execute(email, password, tokenFromHeader);
        return { statusCode: returned.statusCode, body: returned.body, token: returned?.token };
    }
}