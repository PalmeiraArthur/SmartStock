import React from "react";
import Header from "../../componentes/header/header";
import Footer from "../../componentes/footer/footer";
import DownloadJsonButton from "../../componentes/downloadJson/downloadJson";
function Config(){
    return(
        <div className="flex flex-col justify-center items-center gap-[20px]">
            <Header text="Configurações"/>
            
            <DownloadJsonButton></DownloadJsonButton>
           
           <Footer/>
        </div>
    )
}

export default Config;