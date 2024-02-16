import axios from 'axios';

const BASE_URL = 'https://gateway.scan-interfax.ru/api/v1';

// Функция для выполнения запроса авторизации
export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/account/login`,
      loginData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      }
    );
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

    console.log('User info response:', response.data);

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
