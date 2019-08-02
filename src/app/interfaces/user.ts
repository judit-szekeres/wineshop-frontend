export enum Role {
    CUSTOMER = "CUSTOMER",
    ADMIN = "ADMIN"
}
export interface User {
    email: string;
    password?: string;
    passwordConfirm?: string;
    id?: number;
    isValidated?: boolean;
    role?: Role;
}
