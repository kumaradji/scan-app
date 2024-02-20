// api.js
// Axios создает экземпляр API с указанием базового URL и настройками, такими как использование куки
import axios from "axios";

export const API_URL = "https://gateway.scan-interfax.ru/api/v1/"

const api = axios.create({
  withCredentials: false,
  baseURL: API_URL,
})

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  console.log('Запрос работает')
  return config;
})

export default api;
