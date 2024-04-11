import React, { useState } from 'react';
import styles from './imgUploader.module.css';

const ImageUploader = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleIconChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      onImageSelect(file); // Chama a função passada via props com o arquivo selecionado
    }
  };

  return (
    <div class="flex items-center justify-center border-[#5e5e5e] border-2 border-dashed rounded-[10px] w-[180px] h-[180px] bg-white">
      <input id="arquivo" type="file" onChange={handleIconChange} style={{ display: 'none' }}/>

      <label htmlFor="arquivo" className={styles.fotoPerfil}>
        {selectedImage ? (
          <img src={selectedImage} alt="Upload preview" className={styles.imagePreview} />
        ) : (
          <div className={styles.uploadIcon}><img src={`${process.env.PUBLIC_URL}/images/uploadIcon.svg`} alt="Upload icon" className={styles.uploadIcon} /></div>
        )}
      </label>

    </div>
  );
};

export default ImageUploader;