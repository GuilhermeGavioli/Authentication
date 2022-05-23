import express from 'express'
import cors from 'cors'

const app = express();

import dotenv from 'dotenv'
dotenv.config();

import { endpoints } from './endpoints';
import { connect } from './database/connection'

connect();



app.use(cors(
    // { origin: endpoints.allowedUrls } disblad for now -test
))

app.use(express.json())
import accountRouter from './routers/accountRouter'

app.get('/test', (req, res) => {
    
    res.status(200).json({user: "guilherme gavioli"});
})

app.use('/account', accountRouter)


app.listen(endpoints.PORT || 3001, () => console.log('listening'))