import { UserModel } from "../../database/UserModel";

export class QueryRepository { 
    async execute(email: string): Promise<any | null> {
        return await UserModel.findOne({ email }); // return user | null
    }
}
