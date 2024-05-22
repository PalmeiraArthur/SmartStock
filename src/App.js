import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';
import LoginPage from './pages/login/login';
import Config from './pages/configuracoes/config';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/configurações" element={<Config/>} />
      </Routes>
    </Router>
  );
}

export default App;

