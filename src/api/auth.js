// api/auth.js
import api from './api';

export const login = async (credentials) => {
  try {
    const response = await api.post('account/login', credentials);
    // Сохраняем токен в хранилище
    if (response.data.accessToken) {
      localStorage.setItem('accessToken', response.data.accessToken);
    }

    return response.data;
  } catch (error) {
    console.error('Error in login:', error);
    throw error;
  }
};

export const getUserInfo = async () => {
  try {
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('Токен доступа не найден');
    }

    const response = await api.get('account/info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log('Response from server (getUserInfo):', response.data);

    if (!response.data) {
      throw new Error('Данные пользователя не получены от сервера');
    }

    return response.data;
  } catch (error) {
    console.error('Error in getUserInfo:', error);
    throw error;
  }
};
