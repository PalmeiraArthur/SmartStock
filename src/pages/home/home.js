import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Atualizado para useNavigate
import AdicionarBotao from '../../componentes/addButton/addButton';
import RemoveButton from '../../componentes/removeButton/removeButton';
import styles from './home.module.css';
import Header from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';

function Home() {
  const [produtos, setProdutos] = useState(() => {
    // Tentativa de buscar produtos salvos no localStorage ao inicializar o estado
    const produtosSalvos = localStorage.getItem('produtos');
    return produtosSalvos ? JSON.parse(produtosSalvos) : [];
  });

  const navigate = useNavigate(); // Atualizado para useNavigate

  // Função atualizada para redirecionar o usuário para a página de cadastro
  const handleAdicionarClick = () => {
    navigate('/cadastro'); // Atualizado para utilizar navigate
  };

  useEffect(() => {
    // Salvar produtos no localStorage sempre que a lista mudar
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }, [produtos]);

  const handleRemove = (id) => {
    const produtosAtualizados = produtos.filter((_, index) => index !== id);
    setProdutos(produtosAtualizados);
    localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));
  };

  // Função para verificar se novos produtos foram adicionados
  useEffect(() => {
    const checkProdutos = () => {
      const produtosSalvos = localStorage.getItem('produtos');
      if (produtosSalvos) {
        setProdutos(JSON.parse(produtosSalvos));
      }
    };

    // Verifica os produtos toda vez que o componente Home é montado
    checkProdutos();
  }, []);

  return (
    <div class="relative mb-[200px] ">

      <Header></Header>
        
      <div class="fixed left-0 bottom-0 w-screen h-[70px] z-10  ">
      <Footer ></Footer>
      </div>
      
      <div class="flex justify-center my-5">
        <AdicionarBotao onClick={handleAdicionarClick} />
      </div>

      <hr />

      <div class="flex flex-row justify-center gap-10 flex-wrap mt-5 z-0">
        {produtos.map((produto, index) => (

          <div key={index} class="relative flex  bg-[rgb(133,136,136)] w-[800px] h-auto">

            <div class="flex items-center justify-center bg-white rounded-md w-[120px] h-[120px] min-w-[120px] mx-3 my-3">
              {produto.imagemBase64 && <img class="w-auto h-[100px]" src={produto.imagemBase64} alt={`Foto do ${produto.nomeProduto}`} />}
            </div>

            <div>
              <h3>{produto.nomeProduto}</h3>
              <p>Data de entrada: {produto.dataEntrada}</p>
              <p>Validade: {produto.validade}</p>
            </div>

            <div class="absolute left-[695px] bottom-[1px] ">
              <RemoveButton onRemove={handleRemove} id={index} />
            </div>
            
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Home;
