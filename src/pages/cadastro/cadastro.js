import React from 'react';
import { useNavigate } from 'react-router-dom'; // Atualizado para useNavigate
import CadastroForm from '../../componentes/cadastroForm';
import Header from '../../componentes/header/header';

function Cadastro() {
  const navigate = useNavigate(); // Atualizado para useNavigate

  const handleSubmit = (dados) => {
    // Função chamada após a leitura do arquivo ou diretamente para produtos sem foto
    const adicionarProduto = (produto) => {
      const produtosSalvos = localStorage.getItem('produtos');
      const produtos = produtosSalvos ? JSON.parse(produtosSalvos) : [];
      produtos.push(produto);
      localStorage.setItem('produtos', JSON.stringify(produtos));
      
      // Redirecionar para Home após a adição
      navigate('/'); // Atualizado para utilizar navigate
    };

    if (dados.foto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const produtoComImagemBase64 = { ...dados, imagemBase64: reader.result };
        adicionarProduto(produtoComImagemBase64);
      };
      reader.readAsDataURL(dados.foto);
    } else {
      // Para produtos sem foto, prosseguir com a adição diretamente
      adicionarProduto(dados);
    }
  };

  return(
    <div class="flex items-center justify-center round">
      <Header></Header>
      <div class="flex items-center justify-center">
      <CadastroForm onSubmit={handleSubmit} />
      </div>

    </div>
    
  );
}

export default Cadastro;
