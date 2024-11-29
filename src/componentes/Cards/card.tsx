import React from "react";
import { useNavigate } from "react-router-dom";


interface CardProps{
    id: number;
    titulo: string;
    imagem: string;
    preco:  number;
    descricao: string;
    botao: string;
    categorias: string;
}

const Cards: React.FC<CardProps> = ({ id, titulo, imagem, preco, descricao, botao, categorias}) =>{

    const navegacao = useNavigate();
    const handleClick =() =>{
        navegacao(`/detalhes/${id}/${categorias}`);
    }

    return(
        <div className="  rounded-lg border shadow-md shadow-black overflow-hidden bg-white py-2
                        

         ">
            {/* Imagem do produto */}
            <img 
                src={imagem} 
                alt={titulo} 
                className="w-full h-60 object-cover mt- transition-transform transform  duration-200 hover:scale-110 cursor-pointer
                            md:max-lg:h-44  
                            cell_m:max-sm:h-36

                            
            " />
            
            <div className="px-2">
                {/* Título do produto */}
                <h2 className="text-xl font-semibold text-gray-800
                                md:max-lg:text-[16px]
                                cell_m:max-sm:text-[16px]
                ">
                    {titulo}
                </h2>
                
                {/* Preço do produto */}
                <p className="  
                            text-lg text-green-600 font-bold
                            md:max-lg:text-[14px]

                                
                ">
                    R$ {preco}
                </p>
                
                {/* Descrição opcional */}
                <p className="
                            text-[14px] text-gray-600 pr-2
                             md:max-lg:text-[12px]
                ">
                    {descricao}</p>
                
                {/* botao para a página de venda */}
                <button     
                        onClick={handleClick}
                        className="
                                mt-4 inline-block px-6 py-2 text-white bg-hoverBorder rounded-md hover:bg-botao 
                                md:max-lg:px-5
                                
                ">
                {botao}
                </button>
            </div>
        </div>
    );
};

export default Cards;