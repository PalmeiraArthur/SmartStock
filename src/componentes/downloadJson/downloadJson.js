import React from 'react';

function DownloadJsonButton() {
  const handleDownloadJson = () => {
    let produtos = localStorage.getItem('produtos');
    if (produtos) {
      produtos = JSON.parse(produtos);
      const produtosFiltrados = produtos.map(produto => ({
        nome: produto.nomeProduto || "Nome não disponível",  // Ajuste para nomeProduto
        dataValidade: produto.validade || "Data de validade não disponível",  // Ajuste para validade
        categoria: produto.categoria || "Categoria não disponível"
      }));
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(produtosFiltrados));
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "produtos.json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    } else {
      console.error('No products found in localStorage');
    }
  };

  return (
    <button onClick={handleDownloadJson} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[20px] px-[20px] rounded">
      Baixar Dados em JSON
    </button>
  );
}

export default DownloadJsonButton;
