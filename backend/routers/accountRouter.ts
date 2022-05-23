import express from 'express'
const accountRouter = express.Router();

import { accountControllers } from '../controllers/accountControllers'


// add middleware to post accounst later on...
accountRouter.get('/checktoken', accountControllers.checkToken)
accountRouter.post('/register', accountControllers.register)
accountRouter.post('/login', accountControllers.login)




export default accountRouter;