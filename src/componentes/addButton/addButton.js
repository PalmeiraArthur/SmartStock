import React from 'react';

const AdicionarBotao = ({ onClick }) => {
  return (
    <div>

    <button onClick={onClick} class='flex items-center justify-center bg-verde-smartStock w-[500px] h-[90px] cursor-pointer  rounded-lg border-[none] }'>
      <p class='text-[30px] font-semibold text-white'>Cadastrar novo produto</p>

      <svg class="h-auto w-[50px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
    </button>

  </div>

  );

}

  

export default AdicionarBotao;
