import React from 'react';

const RemoveButton = ({ onRemove, id }) => {
  return (
    <button onClick={() => onRemove(id)}>
      Remover Produto
    </button>
  );
};

export default RemoveButton;
