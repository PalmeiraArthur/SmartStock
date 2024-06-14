import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Cadastro from './pages/cadastro/cadastro';
import LoginPage from './pages/login/login';
import Config from './pages/configuracoes/config';
import EditProduto from './componentes/editProduto/editProduto';  // Importando a página de edição

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/configuracoes" element={<Config />} />
        <Route path="/editar/:id" element={<EditProduto />} /> 
      </Routes>
    </Router>
  );
}

export default App;
