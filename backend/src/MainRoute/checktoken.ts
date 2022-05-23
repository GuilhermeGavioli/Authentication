import jwt from 'jsonwebtoken'
import { endpoints } from '../../endpoints'
import express, { Request, Response } from 'express'


// create express adapter for this router later on

export class CheckTokenRouter { 
    check(): any {
        return async (req: Request, res: Response) => {
            const sentToken = req.headers.authorization
            if (sentToken === undefined) {
                return res.status(400).json({ message: "No token provided" })
            }
            try {
                const decoded = jwt.verify(sentToken, endpoints.secretToken)
                return res.status(200).json({ body: { user: decoded }})
            } catch (e: unknown) {
                return res.status(400).json({message: "Token invalid"})
            }
         }
    }
}