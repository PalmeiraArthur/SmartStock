import React from 'react';
import { useNavigate } from 'react-router-dom'; // Atualizado para useNavigate
import CadastroForm from '../../componentes/cadastroForm/cadastroForm';
import Header from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';

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
      navigate('/home'); // Atualizado para utilizar navigate
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
    <div className='flex flex-col gap-[40px]'>
      <Header text="Adicionar produto"/>
      <div class="flex items-center justify-center">
        <div class="flex items-center justify-center bg-[#f5f4f4] border-2 border-verde-smartStock rounded-xl w-[1100px] h-[600px]">
        <CadastroForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div class=" fixed left-0 bottom-0 w-screen h-[70px] z-10">
        <Footer></Footer>
      </div>
    </div>
    
  );
}

export default Cadastro;
