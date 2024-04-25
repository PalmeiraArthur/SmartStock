import React from 'react';
import { useCategorias } from '../categoriaContext/categoriaContext';

const CategoriaFiltro = ({ filtroCategoria, setFiltroCategoria }) => {
    const { categorias } = useCategorias();

    return (
        <div className='flex flex-col items-center justify-center gap-[10px] bg-azul-smartStock w-[210px] h-[100px] font-semibold rounded-[10px]'>
            <p className='text-white text-[18px]'>Filtrar categorias:</p>
            <select className="border-none rounded border-2 bg-white text-azul-smartStock p-[8px]" value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
                <option value="">Todas as categorias</option>
                {categorias.map((cat) => (
                    <option value={cat} key={cat}>{cat}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoriaFiltro;

