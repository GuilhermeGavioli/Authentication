import { endpoints } from "../endpoints";
import jwt from "jsonwebtoken";

export default function (sentToken: string): boolean {
    if (sentToken === undefined) return false;
    
    try {
        const decoded = jwt.verify(sentToken, endpoints.secretToken);
        return true;
    } catch (e: unknown) {
        return false;
    }

}
