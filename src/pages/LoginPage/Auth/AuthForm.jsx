// Auth/AuthForm.jsx
import React, { useState } from 'react';
import { useAuth } from './AuthContext';

const AuthForm = ({ onSuccess }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { store } = useAuth();

  const handleLogin = async () => {
    await store.handleLogin(login, password);
    // Проверяем, был ли успешный вход, и вызываем колбэк onSuccess
    if (store.isAuth) {
      onSuccess();
    }
  };

  return (
    <div>
      <label>
        Login:
        <input type="text" value={login} onChange={(e) => setLogin(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default AuthForm;
