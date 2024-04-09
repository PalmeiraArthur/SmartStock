import React, { useState, useEffect } from 'react';
import AdicionarBotao from '../componentes/addButton';
import CadastroForm from '../componentes/cadastroForm';
import RemoveButton from '../componentes/removeButton';

function Home() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [produtos, setProdutos] = useState(() => {
    // Tentar buscar produtos salvos no localStorage ao inicializar o estado
    const produtosSalvos = localStorage.getItem('produtos');
    return produtosSalvos ? JSON.parse(produtosSalvos) : [];
  });

  useEffect(() => {
    // Salvar produtos no localStorage sempre que a lista mudar
    localStorage.setItem('produtos', JSON.stringify(produtos));
  }, [produtos]);

  const handleAdicionarClick = () => {
    setMostrarFormulario(true);
  };

  const handleSubmitForm = (dados) => {
    if (dados.foto) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const produtoComImagemBase64 = {
          ...dados,
          imagemBase64: reader.result // Agora o produto tem uma string base64 da imagem
        };
        const novosProdutos = [...produtos, produtoComImagemBase64];
        setProdutos(novosProdutos);
        localStorage.setItem('produtos', JSON.stringify(novosProdutos));
      };
      reader.readAsDataURL(dados.foto);
    } else {
      // Caso não tenha foto, apenas adicione os dados como estão
      const novosProdutos = [...produtos, dados];
      setProdutos(novosProdutos);
      localStorage.setItem('produtos', JSON.stringify(novosProdutos));
    }
  
    setMostrarFormulario(false);
  };

  const handleRemove = (id) => {
    const produtosAtualizados = produtos.filter((_, index) => index !== id);
    setProdutos(produtosAtualizados);
    localStorage.setItem('produtos', JSON.stringify(produtosAtualizados));
  };
  

  return (
    <div>
      {!mostrarFormulario && <AdicionarBotao onClick={handleAdicionarClick} />}
      {mostrarFormulario && <CadastroForm onSubmit={handleSubmitForm} />}
      <div>
        {produtos.map((produto, index) => (
          <div key={index}>
            <h3>{produto.nomeProduto}</h3>
            {produto.imagemBase64 && (
              <img src={produto.imagemBase64} alt={`Foto do ${produto.nomeProduto}`} />
            )}
            <p>Data de entrada: {produto.dataEntrada}</p>
            <p>Validade: {produto.validade}</p>
            <RemoveButton onRemove={handleRemove} id={index} /> {/* Aqui usamos o novo componente */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;