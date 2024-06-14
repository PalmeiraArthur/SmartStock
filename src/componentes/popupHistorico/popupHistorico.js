// src/componentes/PopupHistorico/PopupHistorico.jsx

import React from 'react';

const PopupHistorico = ({ historico, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-4 rounded-lg max-w-lg w-full">
        <h2 className="text-lg font-bold mb-4">Histórico de Produtos Retirados</h2>
        <ul>
          {historico.slice().reverse().map((item, index) => (
            <li key={index} className="mb-2 p-2 bg-slate-300 rounded-md flex items-center gap-4">
              {item.imagemBase64 && (
                <img className="w-[50px] h-[50px] object-cover rounded-md" src={item.imagemBase64} alt={`Foto do ${item.nomeProduto}`} />
              )}
              <div>
                <p>Produto: {item.nomeProduto}</p>
                <p>Data de Remoção: {item.dataRemocao}</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default PopupHistorico;
