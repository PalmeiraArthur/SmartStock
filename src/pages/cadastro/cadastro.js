import React from 'react';
import { useNavigate } from 'react-router-dom'; // Atualizado para useNavigate
import CadastroForm from '../../componentes/cadastroForm/cadastroForm';
import Header from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';
import { v4 as uuidv4 } from 'uuid'; // Importando a biblioteca para gerar UUIDs
import Barcode from 'react-barcode'; // Importando a biblioteca para gerar códigos de barras

function Cadastro() {
  const navigate = useNavigate(); // Atualizado para useNavigate

  const handleSubmit = (dados) => {
    const adicionarProduto = (produto) => {
      const produtosSalvos = localStorage.getItem('produtos');
      const produtos = produtosSalvos ? JSON.parse(produtosSalvos) : [];
      produto.id = uuidv4(); // Gerar ID único para o produto
      produto.barcode = uuidv4().replace(/-/g, ''); // Gerar um código de barras aleatório
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
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center bg-[#f5f4f4] border-2 w-[1100px] h-[600px] shadow-2xl rounded-xl border-none">
        <CadastroForm onSubmit={handleSubmit} />
        </div>
      </div>
      <div className="fixed left-0 bottom-0 w-screen h-[70px] z-10">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Cadastro;
