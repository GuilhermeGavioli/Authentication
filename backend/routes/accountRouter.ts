import express from 'express'
const accountRouter = express.Router();

import { accountControllers } from '../controllers/accountControllers'


accountRouter.get('/register', accountControllers.register)
accountRouter.post('/login', accountControllers.login)




export default accountRouter;