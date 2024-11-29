import React from 'react';
import Nav from '../componentes/navigation/Nav'
import Carousel from '../componentes/Carrosel/Carrosel';
import Boot1 from "../assets/img/boot/bota_carousel.jpg"
import Boot2 from "../assets/img/boot/bota_carousel2.jpg"
import Boot3 from "../assets/img/boot/bota_carousel3.jpg"
import Boot4 from "../assets/img/boot/bota_carousel4.jpg"
import Boot5 from "../assets/img/boot/bota_carousel5.jpg"
import Cards from '../componentes/Cards/card';
import {boot} from "../componentes/Data/produtos"
import Footer from '../componentes/Footer/Footer';

function Botas(){
    const imagens=[Boot1,Boot2,Boot3,Boot4,Boot5]
    return(
        <div>
            <Nav/>
            <Carousel imagens={imagens}/>
            <main className='bg-back flex flex-col items-center pt-2'>
                <h1 className='w-full flex items-center justify-center text-4xl mt-5 mb-3
                            cell_m:max-sm:text-3xl'>Botas</h1>
                {/*Botas*/}
                <div className='
                            grid grid-cols-5 px-5 gap-x-5 gap-y-10 mb-9
                            md:max-lg:grid-cols-4
                            cell_m:max-sm:grid-cols-2
                            
                            '>
                {boot.slice(0, 15).map((prod, index)=>(
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
export default Botas;