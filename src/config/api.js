import axios from "axios";
import {getToken, logoutAndRedirectToLogin} from "./auth";

export const apiUrl = 'http://localhost:4000';

const api = axios.create({baseURL: apiUrl});

api.interceptors.request.use(config => {
    const token = getToken();
    if (token) {
        config.headers.authorization = `Bearer ${token}`
    }
    return config
});

api.interceptors.response.use(response => response, error => {
    if (error && error.response && error.response.status === 403) {
        logoutAndRedirectToLogin()
    } else throw new Error(error)
});

export default api

export const LOGIN_URL = 'http://localhost:8000/login';

export const LANDING_PAGE_URL = 'http://localhost:8000/';
