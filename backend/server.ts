import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}))


app.get('/test', (req, res) => { 
    res.status(200).json({user: "guilherme gavioli"});
})



app.listen(3001, () => console.log('listening'))