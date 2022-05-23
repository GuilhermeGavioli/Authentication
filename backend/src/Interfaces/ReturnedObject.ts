export interface IReturnedObject {
    statusCode: number;
    body: { message: string };
    token?: string;
}