import React from 'react';
import Nav from '../componentes/navigation/Nav'
import Carousel from '../componentes/Carrosel/Carrosel';
import Tires from "../assets/img/pneus/pneu_carousel.jpg"
import Tires1 from "../assets/img/pneus/pneu_carousel1.jpg"
import Tires2 from "../assets/img/pneus/pneu_carousel2.jpg"
import Tires3 from "../assets/img/pneus/pneu_carousel3.jpg"
import Tires4 from "../assets/img/pneus/pneu_carousel4.jpg"
import Tires5 from "../assets/img/pneus/pneu_carousel5.jpg"
import Tires6 from "../assets/img/pneus/pneu_carousel6.jpg"
import Cards from '../componentes/Cards/card';
import {tires} from "../componentes/Data/produtos"
import Footer from '../componentes/Footer/Footer';

function Pneus(){
    const imagens=[Tires,Tires1,Tires2,Tires3,Tires4,Tires5,Tires6]
    return(
        <div>
            <Nav/>
            <Carousel imagens={imagens}/>
            <main className='bg-back flex flex-col items-center pt-2'>
                <h1 className='w-full flex items-center justify-center text-4xl mt-5 mb-3
                            cell_m:max-sm:text-3xl'>Pneus</h1>
                {/*Pneus*/}
                <div className='
                            grid grid-cols-5 px-5 gap-x-5 gap-y-10 mb-9
                            md:max-lg:grid-cols-4
                            cell_m:max-sm:grid-cols-2
                            
                            '>
                {tires.slice(0, 15).map((prod, index)=>(
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
export default Pneus;