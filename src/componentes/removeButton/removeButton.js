import React from 'react';


const RemoveButton = ({ onRemove, id }) => {
  return (
    <div >
      <button class="flex items-center justify-center bg-[rgb(204,10,10)] w-[100px] h-[28px] cursor-pointer rounded-[5px] border-[none] "onClick={() => onRemove(id)}>
      <div class="bg-white rounded-sm">
      <svg class="w-auto h-[17px] fill-[rgb(204,10,10)]" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </div>
      <p class="text-white font-semibold ml-[5px]">Remover</p>
      </button>

    </div>
    
  );
};

export default RemoveButton;
