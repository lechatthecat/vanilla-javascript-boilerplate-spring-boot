import axios from 'axios';

// Common configuration like header is written here.
// https://github.com/axios/axios#interceptors
// But if springboot is used for creating API and its interceptors, I think this part isn't necessary.
export const commonApi = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});
