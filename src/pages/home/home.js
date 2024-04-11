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
    <div className={styles.home} class="relative mb-[200px] ">
      <div className={styles.header}>
        <Header></Header>
      </div>
      <div class="fixed left-0 bottom-0 w-screen h-[70px]  ">
      <Footer ></Footer>

      </div>
      
      
      

      <div className={styles.botaoAdicionar}>
        <AdicionarBotao onClick={handleAdicionarClick} />
      </div>

      <hr />

      <div className={styles.container}>
        {produtos.map((produto, index) => (
          <div className={styles.produto} key={index}>
            <h3>{produto.nomeProduto}</h3>
            {produto.imagemBase64 && <img src={produto.imagemBase64} alt={`Foto do ${produto.nomeProduto}`} />}
            <p>Data de entrada: {produto.dataEntrada}</p>
            <p>Validade: {produto.validade}</p>
            <RemoveButton onRemove={handleRemove} id={index} />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Home;
