// RequireAuth.jsx
import React, {useCallback, useEffect, useRef} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAuth} from "../../pages/LoginPage/Auth/AuthContext";

export function RequireAuth({children}) {

  const location = useLocation();
  const {isAuthenticated} = useAuth();

  const firstRender = useRef(true);

  const navigate = useCallback(() => {
    if (!isAuthenticated) {
      return <Navigate to="/login" state={{from: location}}/>;
    }
  }, [isAuthenticated, location]);

  useEffect(() => {
    if (!firstRender.current) {
      navigate();
    }

    firstRender.current = false;
  }, [navigate]);

  return (
    <>
      {firstRender.current ? null : navigate()}
      {children}
    </>
  );
}