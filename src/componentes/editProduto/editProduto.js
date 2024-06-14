import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CadastroForm from '../../componentes/cadastroForm/cadastroForm';

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
    produtos[index] = dados;
    localStorage.setItem('produtos', JSON.stringify(produtos));
    navigate('/home');
  };

  return (
    <div className='flex flex-col gap-[40px]'>
      <h1>Editar Produto</h1>
      {produto ? (
        <CadastroForm initialData={produto} onSubmit={handleSubmit} />
      ) : (
        <p>Produto não encontrado</p>
      )}
    </div>
  );
};

export default EditProduto;
