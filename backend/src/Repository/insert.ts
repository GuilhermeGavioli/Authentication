import { UserModel } from "../../database/UserModel"

export class InsertRepository{ 
    async execute(user: Object): Promise<void> {
        await UserModel.insertMany(user) // return user | null
    } 
}