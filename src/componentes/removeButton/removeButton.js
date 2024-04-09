import React from 'react';
import styles from "./removeButton.module.css";

const RemoveButton = ({ onRemove, id }) => {
  return (
    <div className={styles.botao}>
      <button onClick={() => onRemove(id)}>
      <p className={styles.x}>X</p>
      <p className={styles.remover}>Remover Produto</p>

    </button>

    </div>
    
  );
};

export default RemoveButton;
