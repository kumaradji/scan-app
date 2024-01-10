import { getUserInfo } from '../api/auth';

// Ваша функция для проверки токена
export const checkTokenValidity = async () => {
  try {
    const userInfo = await getUserInfo();
    console.log('Токен действителен. Информация о пользователе:', userInfo);
  } catch (error) {
    console.error('Ошибка при проверке токена:', error.message);
  }
};

// Вызываем функцию для проверки токена
checkTokenValidity();
