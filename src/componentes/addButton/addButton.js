import React from 'react';
import styles from './addButton.module.css'

const AdicionarBotao = ({ onClick }) => {
  return (
    <div className={styles.addButton}>
    <button onClick={onClick}>
    <p className={styles.cadastrar}>Cadastrar novo produto</p>
    <p className={styles.mais}>+</p>
  </button>

  </div>

  );

}

  

export default AdicionarBotao;
