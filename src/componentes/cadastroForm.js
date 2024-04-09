import React, { useState } from 'react';

const CadastroForm = ({ onSubmit }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [foto, setFoto] = useState(null);
  const [dataEntrada, setDataEntrada] = useState('');
  const [validade, setValidade] = useState('');

  const handleFotoChange = (event) => {
    setFoto(event.target.files[0]);
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
        <label>Foto do Produto:</label>
        <input type="file" onChange={handleFotoChange} />
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