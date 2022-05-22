interface IObject {
    error: boolean;
    message: string;
}

interface IvalidateParams {
    email: string;
    password: string;
    name?: string;
}


export default function validate(data: IvalidateParams): IObject {
    const { email, password, name } = data
    const conditions = ["(", ")", "{", "}", "$", "/", "*"];
    
    if (name) {
        if (name?.trim() === "") return { error: true, message: "Empty field."};
        if (name.length > 20) return { error: true, message: "Field is too long." };
        const nameContains = conditions.some(value => name.includes(value));
        if (nameContains) return { error: true, message: "Invalid name character." };
     }

    if (email.trim() === "" || password.trim() === "" || name?.trim() === "") return { error: true, message: "Empty field."};
    if (email.length > 70 || password.length > 17 ) return { error: true, message: "Field is too long." };
    
    const emailOrPasswordContains = conditions.some(value => email.includes(value) || password.includes(value));
    if (emailOrPasswordContains) return { error: true, message: "Invalid email or password character." };
    
    return { error: false, message: "Success"};
}