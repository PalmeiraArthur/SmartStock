import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdicionarBotao from '../../componentes/addButton/addButton';
import RemoveButton from '../../componentes/removeButton/removeButton';
import Header from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';
import CategoriaFiltro from '../../componentes/filtro/filtro';
import DownloadJsonButton from '../../componentes/downloadJson/downloadJson';

function Home() {
  const [produtos, setProdutos] = useState(() => {
    const produtosSalvos = localStorage.getItem('produtos');
    return produtosSalvos ? JSON.parse(produtosSalvos) : [];
  });
  const [filtroCategoria, setFiltroCategoria] = useState('');

  const navigate = useNavigate();

  const handleAdicionarClick = () => {
    navigate('/cadastro');
  };

  const handleRemove = (id) => {
    const produtosAtualizados = produtos.filter((_, index) => index !== id);
    setProdutos(produtosAtualizados);
    localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));  // Atualiza o localStorage após remover um item
  };
  

  useEffect(() => {
    const onStorageUpdate = () => {
      const produtosSalvos = localStorage.getItem('produtos');
      if (produtosSalvos) {
        setProdutos(JSON.parse(produtosSalvos));
      }
    };
  
    window.addEventListener('storage', onStorageUpdate);
    return () => window.removeEventListener('storage', onStorageUpdate);
  }, []);
  

  return (
    <div className="relative mb-[200px]">
      <Header />
      <div className='flex flex-col justify-center items-center gap-[20px] mt-[20px] mb-[20px]'>
        <AdicionarBotao onClick={handleAdicionarClick} />

        <CategoriaFiltro filtroCategoria={filtroCategoria} setFiltroCategoria={setFiltroCategoria} />
      </div>
    
      <hr />

      <div className="flex flex-row justify-center items-center gap-8 flex-wrap mt-5 z-0 text-slate-200 font-semibold">

        {produtos.filter(produto => filtroCategoria === '' || produto.categoria === filtroCategoria).map((produto, index) => (

            <div key={index} className="relative flex items-start bg-[rgb(107,109,109)] w-[600px] h-auto rounded-[10px]">

              <div className="flex items-center justify-center bg-white rounded-md w-[120px] h-[120px] min-w-[120px] mx-3 my-3">
                {produto.imagemBase64 && <img className="w-auto h-[100px]" src={produto.imagemBase64} alt={`Foto do ${produto.nomeProduto}`} />}
              </div>

              <div className='mt-[10px]'>
                <h3 className='font-bold text-[18px] text-white'>{produto.nomeProduto}</h3>
                <p>Data de entrada: {produto.dataEntrada}</p>
                <p>Validade: {produto.validade}</p>
                <p>Categoria: {produto.categoria}</p>
              </div>

              <div className="absolute right-[5px] top-[5px]">
                <RemoveButton onRemove={() => handleRemove(index)} id={index} />
              </div>

            </div>
          ))}
      </div>

      <div className="fixed left-0 bottom-0 w-screen h-[70px] z-10">
        <DownloadJsonButton></DownloadJsonButton>

        <Footer />
      </div>
    </div>
  );
}

export default Home;
