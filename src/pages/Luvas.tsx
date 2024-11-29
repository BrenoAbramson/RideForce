import React from 'react';
import Nav from '../componentes/navigation/Nav'
import Carousel from '../componentes/Carrosel/Carrosel';
import Glove1 from "../assets/img/luvas/luvas_carousel.jpg"
import Glove2 from "../assets/img/luvas/luvas_Courosel.jpg"
import Glove3 from "../assets/img/luvas/luvas_carousel3.jpg"
import Glove4 from "../assets/img/luvas/luvas_carousel4.jpg"
import Cards from '../componentes/Cards/card';
import {gloves} from "../componentes/Data/produtos"
import Footer from '../componentes/Footer/Footer';

function Luvas(){
    const imagens=[Glove1,Glove2,Glove3,Glove4]
    return(
        <div>
            <Nav/>
            <Carousel imagens={imagens}/>
            <main className='bg-back flex flex-col items-center pt-2'>
                <h1 className='w-full flex items-center justify-center text-4xl mt-5 mb-3
                            cell_m:max-sm:text-3xl'>Luvas</h1>
                {/*Luvas*/}
                <div className='
                            grid grid-cols-5 px-5 gap-x-5 gap-y-10 mb-9
                            md:max-lg:grid-cols-4
                            cell_m:max-sm:grid-cols-2
                            
                            '>
                {gloves.slice(0, 15).map((prod, index)=>(
                    <Cards 
                        key={index}
                        id={prod.id}
                        titulo={prod.titulo} 
                        imagem={prod.imagem} 
                        descricao={prod.descricao}
                        preco={prod.preco}  
                        botao={prod.botao}
                        categorias='helmet'
                    />
                ))}
                </div>
            </main>
            <Footer/>
        </div>
    )
}
export default Luvas;