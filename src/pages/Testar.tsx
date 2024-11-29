import React from "react";
import Cards from "../componentes/Cards/card";
import {helmet} from "../componentes/Data/produtos"

function Testes(){
    return(
        <div className="mt-24">
            <div className='flex  w-full  items-center justify-center  gap-5 '>
                    {helmet.slice(0, 2).map((prod, index)=>(
                        <Cards 
                            key={index}
                            id={prod.id}
                            titulo={prod.titulo} 
                            imagem={prod.imagem} 
                            descricao={prod.descricao}
                            preco={prod.preco} 
                            botao={prod.botao}
                            categorias="helmet"
                        />
                    ))}
            </div>
        </div>
    )
}

export default Testes;