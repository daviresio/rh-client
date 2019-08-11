import {LANDING_PAGE_URL, LOGIN_URL} from "./api";

export const TOKEN_KEY = 'token';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY);

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = token => localStorage.setItem(TOKEN_KEY, token);

export const logoutAndRedirectToLogin = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.replace(LOGIN_URL)
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    window.location.replace(LANDING_PAGE_URL)
}
