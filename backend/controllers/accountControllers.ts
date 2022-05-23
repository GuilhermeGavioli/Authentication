
import { LoginAdapter } from '../src/Adapters/login'
import { RegisterAdapter } from '../src/Adapters/register'
import { CheckTokenRouter } from '../src/MainRoute/checktoken'

export const accountControllers = {
    register: new RegisterAdapter().adapt(),
    login: new LoginAdapter().adapt(),
    checkToken: new CheckTokenRouter().check(),
}













