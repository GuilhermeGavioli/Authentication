import { Request, Response } from 'express'

export const accountControllers = {
    register: async(request: Request, response: Response) => { 
        response.send('0register');
    },


    login: async(request: Request, response: Response) => { 
        response.send('l0gin');
    },
}