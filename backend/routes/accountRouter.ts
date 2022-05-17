import express from 'express'
const accountRouter = express.Router();

import { accountControllers } from '../controllers/AccountController'


accountRouter.get('/register', accountControllers.register)
accountRouter.get('/login', accountControllers.login)




export default accountRouter;