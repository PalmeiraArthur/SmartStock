import React, { useState } from 'react';
import ImageUploader from '../imgUploader/imgUploader';
import { useCategorias } from '../categoriaContext/categoriaContext';
import Select from 'react-select'; // Importa o Select de react-select

const CadastroForm = ({ onSubmit }) => {
    const [nomeProduto, setNomeProduto] = useState('');
    const [foto, setFoto] = useState(null);
    const [dataEntrada, setDataEntrada] = useState('');
    const [validade, setValidade] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState(null);
    const { categorias, addCategoria } = useCategorias();

    const handleFotoChange = (file) => {
        setFoto(file);
    };

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? '#24812E' : provided.borderColor,
            outline: state.isFocused ? '1px solid #24812E' : 'none',
            boxShadow: state.isFocused ? '0 0 0 0px ##24812E' : 'none',
            '&:hover': {
                // Manter o estilo mesmo quando passa o mouse, sem alterações
                borderColor: state.isFocused ? '#24812E' : provided.borderColor, // Mantém a mesma lógica de foco
                boxShadow: state.isFocused ? '0 0 0 1px blue' : 'none' // Mantém a mesma lógica de foco
            }
    
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let categoriaFinal = categoria ? categoria.value : '';
        if (categoriaFinal === 'none') {
            categoriaFinal = nomeProduto.toLowerCase();
            addCategoria(categoriaFinal);
        }
        onSubmit({ nomeProduto, foto, dataEntrada, validade, preco, categoria: categoriaFinal });
    };

    const options = categorias.map(cat => ({ value: cat, label: cat }));
    options.push({ value: 'none', label: 'Nenhuma dessas acima' });

    return (
        <form className="relative flex items-center justify-center w-[800px] h-[500px]" onSubmit={handleSubmit}>
            <div>
                <ImageUploader onImageSelect={handleFotoChange} />
            </div>
            <div className="flex flex-col gap-[20px] items-start justify-center text-verde-smartStock font-semibold ml-[50px] text-xl">
                <div>
                    <label>Nome do Produto:</label>
                    <input className="border-2 border-gray-300 p-[2px] rounded-md text-azul-smartStock ml-[10px] focus:outline-verde-smartStock" type="text" value={nomeProduto} onChange={(e) => setNomeProduto(e.target.value)} required />
                </div>
                <div>
                    <label>Data de Entrada:</label>
                    <input className="border-2 border-gray-300 rounded-md text-azul-smartStock ml-[10px] focus:outline-verde-smartStock" type="date" value={dataEntrada} onChange={(e) => setDataEntrada(e.target.value)} required />
                </div>
                <div>
                    <label>Validade:</label>
                    <input className="border-2 border-gray-300 rounded-md text-azul-smartStock ml-[10px] focus:outline-verde-smartStock" type="date" value={validade} onChange={(e) => setValidade(e.target.value)} required />
                </div>
                <div className='flex items-center gap-[10px]'>
                    <label>Categoria do Produto:</label>
                    
                    <Select className="basic-single" classNamePrefix="select" value={options.find(option => option.value === categoria?.value)} onChange={setCategoria} options={options} placeholder="Selecione uma categoria" isClearable styles={customStyles}/>
                </div>
                <div className="absolute -left-[-200px] bottom-[0px] flex items-center justify-center">
                    <button className="text-white bg-verde-smartStock w-[400px] h-[60px] rounded-md" type="submit">Cadastrar Produto</button>
                </div>
            </div>
        </form>
    );
};

export default CadastroForm;
