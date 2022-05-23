import dotenv from 'dotenv'
dotenv.config();

export const endpoints = {
    dbStringConnection: process.env.DB_STRING_CONNECTION || "",
    secretToken: process.env.TOKEN_SECRET || "",
    PORT: process.env.PORT || 3001,
    allowedUrls: process.env.CORS_ALLOWED || "http://localhost:3000"
   
}