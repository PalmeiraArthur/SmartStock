import React from 'react';

const AdicionarBotao = ({ onClick }) => {
  return (
    <div>

    <button onClick={onClick} className='relative flex items-center justify-center bg-transparent w-[500px] h-[90px] cursor-pointer  rounded-lg border-[none] '>
      <p className='text-[30px] font-semibold text-white z-10 pointer-events-none'>Cadastrar novo produto</p>

      <svg className="h-auto w-[50px] fill-white z-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>



    <div class="absolute inset-0 rounded-[10px] bg-verde-smartStock w-[500px] h-[90px]  hover:bg-[rgb(36,160,46)] transition duration-300  z-0"></div>

    </button>

  </div>

  );

}

  

export default AdicionarBotao;
