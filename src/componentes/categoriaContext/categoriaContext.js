import React, { createContext, useState, useContext, useEffect } from 'react';

const CategoriaContext = createContext();

export const useCategorias = () => useContext(CategoriaContext);

export const CategoriaProvider = ({ children }) => {
    // Carregar categorias iniciais do localStorage ou usar categorias padrão
    const categoriasIniciais = JSON.parse(localStorage.getItem('categorias')) || ["Leite", "Queijo", "Carne Bovina", "Carne Suina", "Peixe", "Ovo", "Tomate", "Pimentão", "Frutos do Mar"];
    
    const [categorias, setCategorias] = useState(categoriasIniciais);

    const addCategoria = (novaCategoria) => {
        novaCategoria = novaCategoria.toLowerCase();
        if (!categorias.includes(novaCategoria)) {
            const novasCategorias = [...categorias, novaCategoria];
            setCategorias(novasCategorias);
            localStorage.setItem('categorias', JSON.stringify(novasCategorias)); // Atualizar o localStorage
        }
    };

    // Garantir que as categorias sejam salvas no localStorage ao carregar pela primeira vez
    useEffect(() => {
        localStorage.setItem('categorias', JSON.stringify(categorias));
    }, []);

    return (
        <CategoriaContext.Provider value={{ categorias, addCategoria }}>
            {children}
        </CategoriaContext.Provider>
    );
};