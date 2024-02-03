// api/auth.js
import axios from 'axios';
import SwaggerClient from 'swagger-client';

const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

const swaggerSpec = await SwaggerClient.resolve({
  url: 'https://gateway.scan-interfax.ru/swagger/docs/v1'
});

export const getUserInfo = async () => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('Токен не найден');
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

export const logout = async () => {
  try {
    const token = localStorage.getItem('accessToken');

    await swaggerSpec.execute({
      path: '/account/logout',
      method: 'POST',
      parameters: {
        Authorization: `Bearer ${token}`
      }
    });

    localStorage.removeItem('accessToken');

  } catch (error) {
    console.error('Failed to logout:', error);
    throw error;
  }
};