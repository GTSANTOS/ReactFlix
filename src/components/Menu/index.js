import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import userContext from '../../store/UserContext';

export default function Menu() {
  const currentlyUser = useContext(userContext);
  const { isLogado } = currentlyUser;

  const handleLogout = () => {
    currentlyUser.handleUserContext(false);
  };

  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="VideoFlix Logo" />
      </Link>
      {!isLogado && (
        <Button
          border="true"
          background="black"
          as={Link}
          className="ButtonLink"
          to="/Login"
        >
          Login
        </Button>
      )}
      {isLogado && (
        <div>
          <Button
            border="true"
            background="black"
            as={Link}
            className="ButtonLink MargemButton"
            to="/cadastro/video"
          >
            Novo Video
          </Button>
          <Button
            border="true"
            background="black"
            as={Link}
            className="ButtonLink"
            to="/"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      )}
    </nav>
  );
}
