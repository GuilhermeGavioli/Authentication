import dotenv from 'dotenv'
dotenv.config();

export const endpoints = {
    dbStringConnection: process.env.DB_STRING_CONNECTION || "",
    secretToken: process.env.TOKEN_SECRET || "",
   
}