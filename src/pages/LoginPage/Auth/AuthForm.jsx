// AuthForm.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Используйте useNavigate вместо useHistory
import axios from 'axios';

const AuthForm = () => {
  const navigate = useNavigate(); // Используйте useNavigate вместо useHistory
  const [credentials, setCredentials] = useState({
    login: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        'https://gateway.scan-interfax.ru/api/v1/account/login',
        credentials
      );

      const { accessToken, expire } = response.data;

      // Сохраняем токен и время его истечения в localStorage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('tokenExpire', expire);

      console.log('Перед переходом');
      // Переадресация на другую страницу (например, домашнюю страницу)
      navigate('/');
      console.log('После перехода');
    } catch (error) {
      console.error('Error during login:', error);
      setError('Неверный логин или пароль');
    } finally {
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="login">Логин:</label>
        <input
          type="text"
          id="login"
          name="login"
          value={credentials.login}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password">Пароль:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button type="submit" disabled={loading || !credentials.login || !credentials.password}>
        {loading ? 'Вход...' : 'Войти'}
      </button>
    </form>
  );
};

export default AuthForm;
