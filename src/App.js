import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes/Routes';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Main from './styles/Main';
import GlobalStyled from './styles/GlobalStyled';
import userContext from './store/UserContext';

function App() {
  const [isLogado, setIsLogado] = useState(false);
  const [contextValue, setContextValue] = useState({});

  const handleUserContext = (tipo) => {
    setIsLogado(tipo);
  };

  useEffect(() => {
    setContextValue({
      isLogado,
      handleUserContext,
    });
  }, [isLogado]);

  return (
    <userContext.Provider value={contextValue}>
      <BrowserRouter>
        <Menu />
        <Main>
          <Routes />
        </Main>
        <Footer />
        <GlobalStyled />
        <ToastContainer autoClose={3000} className="toast-container" />
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
