export interface User {
    email : string;
    password:string;
    passwordConfirm :string;
}

export interface UserDTO {
    success: boolean;
    user: User;
}
