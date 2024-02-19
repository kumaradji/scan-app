// api.js
import axios from 'axios';

export const API_URL = 'https://gateway.scan-interfax.ru/api/v1/';

// const accessToken =
// 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIwYzI5NDI0NC1jYzgyLWVkMTEtODI3NS04NzJjODBhZjI3NTMiLCJuYmYiOjE3MDgzMjQ4ODcsImV4cCI6MTcwODQxMTI4NywiaXNzIjoiU2NhbkdhdGV3YXkiLCJhdWQiOiJzZl9zdHVkZW50MSJ9.fSCyYaXYgMTxA2aKAY3tfbpQcReOr7xGsg08pc0_qdc';

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
