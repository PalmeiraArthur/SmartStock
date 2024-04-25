import React, { useState } from 'react';


const ImageUploader = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleIconChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      onImageSelect(file); // Chama a função passada via props com o arquivo selecionado
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);  // Remove a imagem selecionada do estado
    onImageSelect(null);     // Atualiza o estado no componente pai para nulo
  };

  return (
    <div className='flex flex-col justify-center items-center gap-[0px]'>
      <div class="flex  items-center justify-center  border-[#5e5e5e] border-2 border-dashed rounded-[10px] w-[250px] h-[250px] bg-white cursor-pointer">
      
      <input id="arquivo" type="file" onChange={handleIconChange} style={{ display: 'none' }}/>

      <label htmlFor="arquivo" >
        {selectedImage ? (
          <img className='object-cover w-[250px] h-[245px]' src={selectedImage} alt="Upload preview" />
        ) : (
          <div class="flex items-center justify-center w-[250px] h-[250px] bg-transparent cursor-pointer">
            <img class="w-[40px] h-[40px]" src={`${process.env.PUBLIC_URL}/img/uploadIcon.svg`} alt="Upload icon" />
          </div>
        )}
      </label>


    </div>
    <button onClick={handleRemoveImage} className="mt-2 bg-red-500 text-white p-1 rounded">Remover Imagem</button>
    </div>
    
  );
};

export default ImageUploader;