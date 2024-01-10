// LoginForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';

const LoginForm = ({ onSuccess }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin } = useAuth();

  const handleLoginClick = async () => {
    if (!handleLogin) {
      console.error('handleLogin method is not defined.');
      return;
    }

    await handleLogin(login, password);

    // Проверяем, был ли успешный вход, и вызываем колбэк onSuccess
    if (onSuccess) {
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
      <button type="button" onClick={handleLoginClick}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
