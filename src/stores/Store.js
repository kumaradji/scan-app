// stores/Store.js
import { makeAutoObservable } from "mobx";
import axios from 'axios';

export default class Store {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
    // Попробуйте загрузить токен из localStorage при инициализации
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      this.setAuth(true);
    }
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  async handleLogin(login, password) {
    try {
      const response = await fetch('https://gateway.scan-interfax.ru/api/v1/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: login,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const accessToken = data.accessToken;
        this.setAuth(true);
        localStorage.setItem('accessToken', accessToken);
        console.log('Login successful. Access Token:', accessToken);
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  async checkAuth() {
    try {
      const accessToken = localStorage.getItem('accessToken');
      if (!accessToken) {
        // Если токен отсутствует, считаем, что аутентификация не удалась
        this.setAuth(false);
        return;
      }

      const response = await axios.get('https://gateway.scan-interfax.ru/api/v1/account/check-auth', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        // Если успешно, оставляем isAuth как true
      } else {
        // В случае ошибки также считаем, что аутентификация не удалась
        this.setAuth(false);
      }
    } catch (e) {
      console.log(e.response?.data?.message);
      this.setAuth(false);
    }
  }
}
