// AppHeader.jsx

import {useAuth} from "../../pages/LoginPage/Auth/AuthContext";
import HeaderContent from "../AppHeader/HeaderContent/HeaderContent";
import AuthenticatedUserInfo from "../AppHeader/AuthenticatedUserInfo/AuthenticatedUserInfo";
import UnauthenticatedUserPanel from "../AppHeader/UnauthenticatedUserPanel/UnauthenticatedUserPanel";

function AppHeader() {

  const { user, logout } = useAuth();

  function AuthenticatedUserInfo({ user, onLogout }) {

    return (
      <div>
        <div>{user.name}</div>
        <button onClick={onLogout}>Выйти</button>
      </div>
    );

  if (user) {
    return (
      <header>
        <HeaderContent />
        <AuthenticatedUserInfo user={user} onLogout={logout} />
      </header>
    );
  }

  return (
    <header>
      <HeaderContent />
      <UnauthenticatedUserPanel />
    </header>
  );

}

}

export default AppHeader;