import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdicionarBotao from '../../componentes/addButton/addButton';
import RemoveButton from '../../componentes/removeButton/removeButton';
import Header from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';
import CategoriaFiltro from '../../componentes/filtro/filtro';

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

  const formatarDataParaExibicao = (dataISO) => {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const converterDataParaISO = (dataBrasileira) => {
    const [dia, mes, ano] = dataBrasileira.split('/');
    return `${ano}-${mes}-${dia}`;
  };

  const ordenarPorDataDeValidade = (produtos) => {
    return produtos.sort((a, b) => new Date(converterDataParaISO(a.validade)) - new Date(converterDataParaISO(b.validade)));
  };

  const handleRemove = (id) => {
    const removee = window.confirm('Desseja remover esse item?')

    if (removee) {
      const produtosAtualizados = produtos.filter((_, index) => index !== id);
      setProdutos(produtosAtualizados);
      localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));
    }
     
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
  
  const produtoContainerClass = filtroCategoria === '' ? "flex-row" : "flex-col";

  return (
    <div className="flex flex-col justify-center items-center relative mb-[200px] ">

      <Header text="Produtos" />
        <div className='flex flex-col justify-center items-center gap-[20px] mt-[20px] mb-[20px]'>
          <AdicionarBotao onClick={handleAdicionarClick} />
        </div>

        <div className='bg-azul-smartStock h-[1px] w-full mb-[20px]'></div>

        <CategoriaFiltro filtroCategoria={filtroCategoria} setFiltroCategoria={setFiltroCategoria} />

        <div className={`flex justify-center items-center gap-[32px] flex-wrap mt-[20px] z-0 text-slate-200 font-semibold ${produtoContainerClass}`}>
          {ordenarPorDataDeValidade(produtos.filter(produto => filtroCategoria === '' || produto.categoria === filtroCategoria)).map((produto, index) => (
              <div key={index} className="relative flex items-start bg-[rgb(107,109,109)] w-[600px] h-auto rounded-[10px]">
                <div className="flex items-center justify-center bg-white rounded-md w-[120px] h-[120px] min-w-[120px] mx-3 my-3">
                  {produto.imagemBase64 && <img className="w-auto h-[100px]" src={produto.imagemBase64} alt={`Foto do ${produto.nomeProduto}`} />}
                </div>

                <div className='mt-[10px]'>
                  <h3 className='font-bold text-[18px] text-white'>{produto.nomeProduto}</h3>
                  <p>Data de entrada: {formatarDataParaExibicao(produto.dataEntrada)}</p>
                  <p>Validade: {formatarDataParaExibicao(produto.validade)}</p>
                  <p>Categoria: {produto.categoria}</p>
                </div>

                <div className="absolute right-[5px] top-[5px]">
                  <RemoveButton onRemove={() => handleRemove(index)} id={index} />
                </div>
              </div>
            ))}
        </div>
      
      <div >
        
        <Footer />
      </div>
    </div>
  );
}

export default Home;
