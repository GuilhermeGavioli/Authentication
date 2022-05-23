import { IReturnedObject } from "../Interfaces/ReturnedObject";
import { RegisterUseCase } from "../UseCases/register";

export class RegisterRouter {
    async execute(HttpRequest: any): Promise<IReturnedObject> { 
        const { name, email, password } = HttpRequest.body
        return await new RegisterUseCase().execute(name, email, password); 
    }
}