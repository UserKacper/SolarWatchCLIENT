export type TUserLogin = {
    email: string;
    password: string;
}
export type TUserRegister = {
    userName: string;
    email: string;
    password: string;
}

export type TUserLoginResponse = {
    token: string;
    userName: string;
    email: string;
}
