import { IReturnedObject } from "../src/Interfaces/ReturnedObject";


export function validateCredentials(email: string, password: string, name?: string): IReturnedObject { 
    const conditions = ["(", ")", "{", "}", "$", "/", "*"];
    if (email.trim() === "" || password.trim() === "") return { statusCode: 400, body: { message: "Empty Field." } }
    if (email.length > 100 || password.length > 15) return { statusCode: 400, body: { message: "Field too long." } }
    if (conditions.some(item => email.includes(item) || password.includes(item) || name?.includes(item))) { return { statusCode: 400, body: { message: "Only alphabetic or numeric numbers allowed" } } }
    return { statusCode: 200, body: { message: "Success" } }
}