import { create } from 'zustand';
import * as jose from 'jose'

interface AuthState {
    email: string;
    password: string;
    token: string;
    userName: string;
    setLoggedInUser: (token: string, email: string, userName: string) => void;
    clearSession: () => void;
}

export const authStore = create<AuthState>((set) => ({
    email: '',
    password: '',
    token: '',
    userName: '',
    setLoggedInUser: (token: string, email: string, userName: string) =>
        set((state) => ({
            ...state,
            email: email,
            token: token,
            userName: userName,
        })),
    clearSession: () =>
        set({
            email: '',
            password: '',
            token: '',
            userName: '',
        }),
}));

export const isTokenValid = () => {
    const token = localStorage.getItem('token')
    try {
        if (!token) return false;

        const decodeToken = jose.decodeJwt(token);

        if (!decodeToken.exp || decodeToken.exp * 1000 <= Date.now()) {
            return false;
        }


        return true;
    } catch (error) {
        console.error('Error validating token:', error);
        return false;
    }
};


export const saveDataToLocalStorage = (token: string, email: string, userName: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('userName', userName);
};

export const userData = () => {
    const data = {
        token: localStorage.getItem("token"),
        email: localStorage.getItem("email"),
        username: localStorage.getItem("userName")
    }
    return data
}

export const isLocalStorageTokenExisting = () => {

    if (isTokenValid()) return true
    return false
}

export const clearLocalStorage = () => {
    localStorage.clear();
};
