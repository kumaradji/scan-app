// api/auth.js
import axios from 'axios';

const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1/account';

export const getUserInfo = async () => {
  const token = localStorage.getItem('accessToken');
  if (!token) {
    throw new Error('Токен доступа не найден');
  }

  return await axios.get(`${BASE_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const logout = (callback) => {
  localStorage.removeItem('accessToken');

  callback();
};
