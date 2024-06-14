import React, { useState, useEffect } from 'react';
import ImageUploader from '../imgUploader/imgUploader';
import { useCategorias } from '../categoriaContext/categoriaContext';
import Select from 'react-select';
import { v4 as uuidv4 } from 'uuid';  // Importando a biblioteca para gerar UUIDs

const CadastroForm = ({ onSubmit, initialData }) => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [foto, setFoto] = useState(null);
  const [dataEntrada, setDataEntrada] = useState('');
  const [validade, setValidade] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState(null);
  const [novaCategoria, setNovaCategoria] = useState('');
  const { categorias, addCategoria } = useCategorias();

  useEffect(() => {
    if (initialData) {
      setNomeProduto(initialData.nomeProduto);
      setFoto(initialData.foto);
      setDataEntrada(initialData.dataEntrada);
      setValidade(initialData.validade);
      setPreco(initialData.preco);
      setCategoria({ value: initialData.categoria, label: initialData.categoria });
    } else {
      const now = new Date();
      const formattedDate = now.toISOString().slice(0, 10);
      setDataEntrada(formattedDate);
    }
  }, [initialData]);

  const handleFotoChange = (file) => {
    setFoto(file);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused ? '#24812E' : provided.borderColor,
      outline: state.isFocused ? '1px solid #24812E' : 'none',
      boxShadow: state.isFocused ? '0 0 0 0px ##24812E' : 'none',
      '&:hover': {
        borderColor: state.isFocused ? '#24812E' : provided.borderColor,
        boxShadow: state.isFocused ? '0 0 0 1px blue' : 'none'
      }
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let categoriaFinal = categoria ? categoria.value : '';
    if (categoriaFinal === 'none') {
      categoriaFinal = novaCategoria.toLowerCase();
      addCategoria(categoriaFinal);
    }

    const formData = { 
      id: initialData ? initialData.id : uuidv4(),  // Adiciona ID ao produto
      nomeProduto, 
      foto, 
      dataEntrada, 
      validade, 
      preco, 
      categoria: categoriaFinal 
    };

    if (initialData) {
      formData.imagemBase64 = initialData.imagemBase64; // Mantém a imagem original
    }

    onSubmit(formData);
  };

  const options = categorias.map(cat => ({ value: cat, label: cat }));
  options.push({ value: 'none', label: 'Nenhuma dessas acima' });

  return (
    <form className="relative flex items-center justify-center w-[800px] h-[500px]" onSubmit={handleSubmit}>
      <div>
        {initialData ? (
          <div className="flex items-center justify-center bg-white rounded-md w-[120px] h-[120px] min-w-[120px] mx-3 my-3 overflow-hidden">
            {initialData.imagemBase64 && <img className="w-full h-full object-cover" src={initialData.imagemBase64} alt={`Foto do ${initialData.nomeProduto}`} />}
          </div>
        ) : (
          <ImageUploader onImageSelect={handleFotoChange} />
        )}
      </div>
      <div className="flex flex-col gap-[20px] items-start justify-center text-verde-smartStock font-semibold ml-[50px] text-xl">
        <div>
          <label>Nome do Produto:</label>
          <input className="border-2 border-gray-300 p-[2px] rounded-md text-azul-smartStock ml-[10px] focus:outline-verde-smartStock" type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} required />
        </div>
        <div>
          <label>Data de Entrada:</label>
          <input className="border-2 border-gray-300 rounded-md text-azul-smartStock ml-[10px] focus:outline-verde-smartStock" type="date" value={dataEntrada} onChange={(e) => setDataEntrada(e.target.value)} required />
        </div>
        <div>
          <label>Validade:</label>
          <input className="border-2 border-gray-300 rounded-md text-azul-smartStock ml-[10px] focus:outline-verde-smartStock" type="date" value={validade} onChange={(e) => setValidade(e.target.value)} required />
        </div>
        <div className='flex items-center gap-[10px]'>
          <label>Categoria do Produto:</label>
          <Select className="basic-single" classNamePrefix="select" value={options.find(option => option.value === categoria?.value)} onChange={setCategoria} options={options} placeholder="Selecione uma categoria" isClearable styles={customStyles} />
        </div>
        {categoria && categoria.value === 'none' && (
          <div>
            <label>Nova Categoria:</label>
            <input className="border-2 border-gray-300 p-[2px] rounded-md text-azul-smartStock ml-[10px] focus:outline-verde-smartStock" type="text" value={novaCategoria} onChange={(e) => setNovaCategoria(e.target.value)} required />
          </div>
        )}
        <div className="absolute -left-[-200px] bottom-[0px] flex items-center justify-center">
          <button className="text-white bg-verde-smartStock w-[400px] h-[60px] rounded-md" type="submit">{initialData ? 'Salvar Alterações' : 'Cadastrar Produto'}</button>
        </div>
      </div>
    </form>
  );
};

export default CadastroForm;
