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
    <form class="relative flex items-center justify-start  w-[800px] h-[500px] " onSubmit={handleSubmit}>
      <div>
      <ImageUploader onImageSelect={handleFotoChange} />
      </div>

      <div class="flex flex-col gap-[20px] items-start justify-center text-verde-smartStock font-semibold ml-[30px] text-xl">
        <div>
          <label>Nome do Produto:</label>
          <input class="border-2 border-azul-smartStock rounded-md text-azul-smartStock ml-[10px]" type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} required/>
        </div>

        <div>
          <label>Data de Entrada:</label>
          <input class="border-2 border-azul-smartStock rounded-md text-azul-smartStock ml-[10px] " type="date" value={dataEntrada} onChange={(e) => setDataEntrada(e.target.value)}required/>
        </div>

        <div>
          <label>Validade:</label>
          <input class="border-2 border-azul-smartStock rounded-md text-azul-smartStock ml-[10px]" type="date" value={validade} onChange={(e) => setValidade(e.target.value)} required/>
        </div>

        <div class="absolute -left-[-200px] bottom-[0px] flex items-center justify-center">
        <button class=" text-white bg-verde-smartStock w-[400px] h-[60px] rounded-md"type="submit">Cadastrar Produto</button>
        </div>

      </div>
      
    </form>
  );
};

export default CadastroForm;