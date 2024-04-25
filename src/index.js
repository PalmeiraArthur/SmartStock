import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CategoriaProvider } from './componentes/categoriaContext/categoriaContext';

ReactDOM.render(
  <React.StrictMode>
    <CategoriaProvider>
    <App />
    </CategoriaProvider>

  </React.StrictMode>,
  document.getElementById('root')
);