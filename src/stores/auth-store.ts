import { create } from 'zustand';

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

export const saveTokenToLocalStorage = (token: string) => {
    localStorage.setItem('token', token);
};

export const isLocalStorageTokenExisting = () => {
    const token = localStorage.getItem('token');
    if (token) return true
    return false
}

export const clearLocalStorage = () => {
    localStorage.clear();
};
