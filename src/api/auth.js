// api/auth.js
import axios from 'axios';

const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

export const login = async ({ login, password }) => {
  try {
    const response = await axios.post(`${BASE_URL}/account/login`, {
      login,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('Токен доступа не найден');
    }

    const response = await axios.get(`${BASE_URL}/account/info`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = (callback) => {
  localStorage.removeItem('accessToken');
  callback();
};
