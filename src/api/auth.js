// api/auth.js

import axios from 'axios';

const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

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

export const logout = async (callback) => {
  try {
    // Ваш код для разлогинивания
    localStorage.removeItem('accessToken');
    // Если успешно разлогинились, вызываем callback (если он передан)
    if (typeof callback === 'function') {
      callback();
    }
  } catch (error) {
    console.error('Error during logout:', error);
    throw error;
  }
};
