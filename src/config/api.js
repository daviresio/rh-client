import axios from "axios";
import {getToken} from "./auth";

const api = axios.create({baseURL: 'http://localhost:4000'});

api.interceptors.request.use(async config => {
    const token = getToken();
    if (token) {
        config.headers.authorization = `Bearer ${token}`
    }
    return config
});


export default api

export const LOGIN_URL = 'http://localhost:8000/login'

export const LANDING_PAGE_URL = 'http://localhost:8000/'
