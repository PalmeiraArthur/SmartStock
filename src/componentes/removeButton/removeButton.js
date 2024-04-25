import React from 'react';


const RemoveButton = ({ onRemove, id }) => {
  return (
    <div >
      <button class="ease-in duration-200 flex items-center justify-center bg-yellow-300 w-[150px] h-[28px] cursor-pointer rounded-[5px] border-[none] hover:bg-yellow-500"onClick={() => onRemove(id)}>
      <div class="bg-azul-smartStock rounded-sm">
      </div>
      <p class="text-azul-smartStock font-semibold ml-[5px]">Retirar do estoque</p>
      </button>

    </div>
    
  );
};

export default RemoveButton;
