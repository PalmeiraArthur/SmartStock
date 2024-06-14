import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CadastroForm from '../../componentes/cadastroForm/cadastroForm';
import Header from '../header/header';

const EditProduto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtosSalvos = localStorage.getItem('produtos');
    const produtos = produtosSalvos ? JSON.parse(produtosSalvos) : [];
    const produtoParaEditar = produtos.find(produto => produto.id === id);
    setProduto(produtoParaEditar);
    console.log(`Carregando produto com ID ${id}:`, produtoParaEditar);
  }, [id]);

  const handleSubmit = (dados) => {
    const produtosSalvos = localStorage.getItem('produtos');
    const produtos = produtosSalvos ? JSON.parse(produtosSalvos) : [];
    const index = produtos.findIndex(produto => produto.id === id);
    produtos[index] = { ...produtos[index], ...dados }; // Mescla os dados mantendo o código de barras
    localStorage.setItem('produtos', JSON.stringify(produtos));
    navigate('/home');
  };

  return (
    <div className='flex flex-col justify-center items-center gap-[60px]'>
        <Header text="Editar Produto"></Header>
        <div className='flex justify-center bg-[#f5f4f4] rounded-xl w-[1100px] h-[600px] shadow-2xl'>

      {produto ? (
        <CadastroForm initialData={produto} onSubmit={handleSubmit} />
      ) : (
        <p>Produto não encontrado</p>
      )}
        </div>
    </div>
  );
};

export default EditProduto;
