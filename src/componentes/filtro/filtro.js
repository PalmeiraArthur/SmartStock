// CategoriaFiltro.js
import React from 'react';

const CategoriaFiltro = ({ filtroCategoria, setFiltroCategoria }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-[10px] bg-azul-smartStock w-[210px] h-[100px] font-semibold rounded-[10px]'>
        <p className='text-white text-[18px]'>Filtrar categorias:</p>
        <select className="border-none rounded border-2 bg-white text-azul-smartStock p-[8px]" value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
        <option value="">Todas as categorias</option>
        <option value="laticinios">Laticínios</option>
        <option value="vegetais">Vegetais</option>
        <option value="frutas">Frutas</option>
        <option value="carnes">Carnes</option>
        <option value="peixes">Peixes</option>
        <option value="ovos">Ovos</option>
        </select>
    </div>

  );
};

export default CategoriaFiltro;
