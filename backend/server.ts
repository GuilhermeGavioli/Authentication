import express from 'express'
import cors from 'cors'

const app = express();

import dotenv from 'dotenv'
dotenv.config();

import { connect } from './database/connection'

connect();


app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())
import accountRouter from './routes/accountRouter'

app.get('/test', (req, res) => { 
    
    res.status(200).json({user: "guilherme gavioli"});
})

app.use('/account', accountRouter)



app.listen(3001, () => console.log('listening'))