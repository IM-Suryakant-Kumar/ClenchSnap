export default interface IUser {
    name: string;
    email: string;
    avatar: string;
}

export interface ILogCred {
    email: string;
    password: string;
}

export interface IRegCred {
    name: string;
    email: string;
    avatar?: string;
    password: string;
}