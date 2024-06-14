import React from "react";

const Header = ({text}) =>{

    return(
        <div className="relative flex items-center justify-center bg-azul-smartStock w-screen h-[93px] font-semibold" >
            
            <img className="absolute left-[10px]" src="./img/logoPng.png"></img>
           
           <p className="text-white text-[50px]">{text}</p>
        </div>        
    );
}

export default Header;