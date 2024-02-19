// AuthService.js
import api from '../../../api/api';

export default class AuthService {
  static async login(username, password) {
    try {
      const response = await api.post('/auth', {username, password});

      localStorage.setItem('accessToken', response.data.accessToken);

      return response.data;
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
