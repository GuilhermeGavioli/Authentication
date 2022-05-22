import express, { Request, Response } from 'express'





class LoginAdapter {
    adapt() {
        return async (request: Request, response: Response) => {
            const httpReq = {
                body: request.body
            }
            const returned = await new LoginRouter().execute(httpReq);
            response.status(returned.statusCode).json(returned.body)
           

         }
    }
}
    

export const accountControllers = {
    register: async(request: Request, response: Response) => { 
        response.send('0register');
    },

    login: new LoginAdapter().adapt(),
}

class LoginRouter {
    async execute( HttpRequest: any ) {
        const { email, password } = HttpRequest.body
        const returned = await new LoginUseCase().execute(email, password);
        return { statusCode: returned.statusCode, body: returned.body }  
    }
}

import bcrypt from 'bcrypt'

class LoginUseCase {
    async execute(email: string, password: string) {
        const conditions = ["(", ")", "{", "}", "$", "/", "*"];
        if (email.trim() === "" || password.trim() === "") return { statusCode: 400, body: { message: "Empty Field." } }
        if (email.length > 100 || password.length > 15) return { statusCode: 400, body: { message: "Field too long." } }
        if (conditions.some(item => email.includes(item) || password.includes(item))) { return { statusCode: 400, body: { message: "Only alphabetic or numeric numbers allowed" } } }

        const foundUser = await new LoginRepository().execute(email);
        if (!foundUser) return { statusCode: 404, body: { message: "User does not exist." } }
        return { statusCode: 200, body: { message: "Success" } }
    }
}


import mongoose from 'mongoose'
const UserModel = mongoose.model('UserModel', new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}))

class LoginRepository { 
    async execute(email: string) {
        return await UserModel.findOne({ email });
       
    }

}