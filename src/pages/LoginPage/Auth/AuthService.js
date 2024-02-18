// AuthService.js
import api from '../../../api/api';

export default class AuthService {
  static async login(username, password) {
    try {
      const response = await api.post('account/login', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json-patch+json',
          'Accept': 'application/json',
          // 'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
      });

      localStorage.setItem('accessToken', response?.data?.accessToken);
      return response;
    } catch (error) {
      console.error('Error from AuthService:', error);
      throw error;
    }
  }

  static async logout() {
    try {
      const response = await api.post('account/logout', null, {
        headers: {
          'Content-Type': 'application/json-patch+json',
          'Accept': 'application/json',
        },
      });

      console.log(response);
      localStorage.removeItem('accessToken');
    } catch (error) {
      console.error('Error during logout:', error);
      throw error;
    }
  }
}
