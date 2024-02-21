// AuthService.js
import api from '../../../api/api';

export default class AuthService {
  static async login(login, password) {
    try {
      const response = await api.post('account/login', {
        login: login,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      localStorage.setItem('accessToken', response.data.accessToken);
      console.log(response.data.accessToken);

      return response.data;
    } catch (error) {
      console.error('Error from AuthService:', error);
      throw error;
    }
  }

  static logout() {
    // Реализуйте ваш код для выхода
    // Например, удалите токен из localStorage и другие необходимые действия
    localStorage.removeItem('accessToken');
    console.log('Logged out successfully');
  }
}
