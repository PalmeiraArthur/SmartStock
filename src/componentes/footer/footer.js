import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center bg-gray-700 fixed left-0 bottom-0 w-screen h-[75px] z-10 gap-[600px]">
            <button
                onClick={() => navigate('/home')}
                className="flex flex-col items-center justify-center h-[45px] w-[45px] text-white text-center  hover:text-verde-smartStock transition-all"
            >
                <img className="h-auto w-[60px]" src="/icons/icon_home.svg" alt="Home" />
                <p className="font-semibold text-[16px]">produtos</p>
            </button>

            <button
                onClick={() => navigate('/cadastro')}
                className="flex flex-col items-center justify-center h-[45px] w-[45px] text-white text-center hover:text-verde-smartStock transition-all">
                <img className="h-auto w-[60px]" src="/icons/icon_add.svg" alt="Adicionar Produto" />
                <p className="font-semibold text-[16px] whitespace-nowrap">adicionar produto</p>
            </button>

            <button
                onClick={() => navigate('/configurações')}
                className="flex flex-col items-center justify-center h-[45px] w-[45px] text-white text-center  hover:text-verde-smartStock transition-all"
            >
                <img className="h-auto w-[60px]" src="/icons/icon_config.svg" alt="Configurações" />
                <p className="font-semibold text-[16px]">configurações</p>
            </button>
        </div>
    );
}

export default Footer;

