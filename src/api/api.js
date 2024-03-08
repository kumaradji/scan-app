// api.js
// Axios создает экземпляр API с указанием базового URL и настройками, такими как использование куки
import axios from "axios";

export const API_URL = "https://gateway.scan-interfax.ru/api/v1/";

const api = axios.create({
  withCredentials: false,
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  config.headers.Authorization = `Bearer ${accessToken}`;
  console.log('Запрос работает');
  console.log('Request Config:', config);
  return config;
});

export default api;
