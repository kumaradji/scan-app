// api/auth.js
import axios from 'axios';

const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1/account';

export const getUserInfo = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('Токен доступа не найден');
  }

  try {
    const response = await axios.get(`${BASE_URL}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = () => {
  // Ваша логика выхода, например, очистка localStorage
  localStorage.removeItem('accessToken');
};