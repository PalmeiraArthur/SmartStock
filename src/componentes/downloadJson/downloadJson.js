import React from 'react';

function DownloadJsonButton() {
  const handleDownloadJson = () => {
    const produtos = localStorage.getItem('produtos');
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(produtos);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "produtos.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <button onClick={handleDownloadJson} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-[20px] px-[20px] rounded">
      Baixar Dados em JSON
    </button>
  );
}

export default DownloadJsonButton;
