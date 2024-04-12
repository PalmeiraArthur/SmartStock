import React from "react";

function Header (){
    return(
        <div class="relative flex items-center justify-center bg-azul-smartStock w-screen h-[93px] font-semibold" >
            
            <img class="absolute left-[10px]" src="./img/logoPng.png"></img>
           
           <p class="text-white text-[50px]">Produtos</p>
        </div>
        
    );



}

export default Header;