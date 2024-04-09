import React, { useState } from 'react';
import ImageUploader from './imgUploader/imgUploader';

const CadastroForm = ({ onSubmit }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [foto, setFoto] = useState(null);
  const [dataEntrada, setDataEntrada] = useState('');
  const [validade, setValidade] = useState('');

  const handleFotoChange = (file) => {
    setFoto(file);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nomeProduto, foto, dataEntrada, validade });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Produto:</label>
        <input
          type="text"
          value={nomeProduto}
          onChange={(e) => setNomeProduto(e.target.value)}
          required
        />
      </div>
      <div>
      <ImageUploader onImageSelect={handleFotoChange} />
      </div>
      <div>
        <label>Data de Entrada:</label>
        <input
          type="date"
          value={dataEntrada}
          onChange={(e) => setDataEntrada(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Validade:</label>
        <input
          type="date"
          value={validade}
          onChange={(e) => setValidade(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default CadastroForm;