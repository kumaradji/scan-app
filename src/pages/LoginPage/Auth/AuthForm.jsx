// Auth/AuthForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';

const AuthForm = ({ onLoginSuccess }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, isAuth } = useAuth();

  const handleLoginClick = async () => {
    if (!handleLogin) {
      console.error('handleLogin method is not defined.');
      return;
    }

    await handleLogin(login, password);

    // После успешного входа вызываем onLoginSuccess, если пользователь аутентифицирован
    if (isAuth) {
      onLoginSuccess();
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

export default AuthForm;
