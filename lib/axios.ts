import axios from 'axios';

export const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
    baseURL: `${BaseUrl}/graphql`,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Accept': 'application/json',
    },
})