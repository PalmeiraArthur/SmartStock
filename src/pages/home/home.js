import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdicionarBotao from '../../componentes/addButton/addButton';
import RemoveButton from '../../componentes/removeButton/removeButton';
import Header from '../../componentes/header/header';
import Footer from '../../componentes/footer/footer';
import CategoriaFiltro from '../../componentes/filtro/filtro';
import PopupHistorico from '../../componentes/popupHistorico/popupHistorico';
import { useCategorias } from '../../componentes/categoriaContext/categoriaContext';  // Importando useCategorias

function Home() {
  const [produtos, setProdutos] = useState(() => {
    const produtosSalvos = localStorage.getItem('produtos');
    return produtosSalvos ? JSON.parse(produtosSalvos) : [];
  });
  const [historico, setHistorico] = useState(() => {
    const historicoSalvo = localStorage.getItem('historico');
    return historicoSalvo ? JSON.parse(historicoSalvo) : [];
  });
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const { categorias } = useCategorias();  // Obtendo categorias do contexto

  const navigate = useNavigate();

  const handleAdicionarClick = () => {
    navigate('/cadastro');
  };

  const handleEditClick = (id) => {
    console.log(`Editando produto com ID: ${id}`);
    navigate(`/editar/${id}`);
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
    const removee = window.confirm('Deseja remover esse item?');

    if (removee) {
      const produtosAtualizados = produtos.filter(produto => produto.id !== id);
      setProdutos(produtosAtualizados);
      localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));

      const produtoRemovido = produtos.find(produto => produto.id === id);
      const novoHistorico = [...historico, { ...produtoRemovido, dataRemocao: new Date().toLocaleDateString('pt-BR') }];
      setHistorico(novoHistorico);
      localStorage.setItem('historico', JSON.stringify(novoHistorico));
    }
  };

  useEffect(() => {
    const onStorageUpdate = () => {
      const produtosSalvos = localStorage.getItem('produtos');
      if (produtosSalvos) {
        setProdutos(JSON.parse(produtosSalvos));
      }
      const historicoSalvo = localStorage.getItem('historico');
      if (historicoSalvo) {
        setHistorico(JSON.parse(historicoSalvo));
      }
    };

    window.addEventListener('storage', onStorageUpdate);
    return () => window.removeEventListener('storage', onStorageUpdate);
  }, []);

  const produtosFiltradosEOrdenados = ordenarPorDataDeValidade(produtos.filter(produto => filtroCategoria === '' || produto.categoria === filtroCategoria));

  console.log('Produtos filtrados e ordenados:', produtosFiltradosEOrdenados);

  return (
    <div className="flex flex-col justify-center items-center relative mb-[200px] ">
      <Header text="Produtos" />

      <div className='flex flex-row justify-center items-center gap-[20px] ml-[80px]'>
        
      <div className='flex flex-col justify-center items-center gap-[20px] mt-[20px] mb-[20px]'>
        <AdicionarBotao onClick={handleAdicionarClick} />
      </div>

      <button className="flex justify-center items-center h-[60px] w-[60px] bg-verde-smartStock text-white rounded" onClick={() => setShowPopup(true)}>
        <img className='h-auto w-[50px]' src='img/historico.svg'/>
      </button>

      </div>
      
      <div className='bg-azul-smartStock h-[1px] w-full mb-[20px]'></div>

      <CategoriaFiltro filtroCategoria={filtroCategoria} setFiltroCategoria={setFiltroCategoria} />

      <div className={`flex justify-center items-center gap-[32px] flex-wrap mt-[20px] z-0 text-slate-200 font-semibold ${filtroCategoria === '' ? 'flex-row' : 'flex-col'}`}>
        {produtosFiltradosEOrdenados.map((produto) => (
          <div key={produto.id} className="relative flex items-start bg-[rgb(107,109,109)] w-[600px] h-auto rounded-[10px]">
            <div className="flex items-center justify-center bg-white rounded-md w-[120px] h-[120px] min-w-[120px] mx-3 my-3 overflow-hidden">
              {produto.imagemBase64 && <img className="w-full h-full object-cover" src={produto.imagemBase64} alt={`Foto do ${produto.nomeProduto}`} />}
            </div>

            <div className='mt-[10px]'>
              <h3 className='font-bold text-[18px] text-white'>{produto.nomeProduto}</h3>
              <p>Data de entrada: {formatarDataParaExibicao(produto.dataEntrada)}</p>
              <p>Validade: {formatarDataParaExibicao(produto.validade)}</p>
              <p>Categoria: {produto.categoria}</p>
            </div>

            <div className="absolute right-[5px] top-[5px] flex gap-2">
              <button className="text-white bg-blue-500 px-2 py-1 rounded" onClick={() => handleEditClick(produto.id)}>Editar</button>
              <RemoveButton onRemove={() => handleRemove(produto.id)} id={produto.id} />
            </div>
          </div>
        ))}
      </div>

      {showPopup && <PopupHistorico historico={historico} onClose={() => setShowPopup(false)} />}

      <Footer />
    </div>
  );
}

export default Home;
