import React from 'react';
import Nav from '../componentes/navigation/Nav'
import Carousel from '../componentes/Carrosel/Carrosel';
import Jacketa1 from "../assets/img/jaquetas/jack_carrosel.jpg"
import Jacketa2 from "../assets/img/jaquetas/jack_carrosel1.jpg"
import Jacketa3 from "../assets/img/jaquetas/jack_carrosel2.jpg"
import Jacketa4 from "../assets/img/jaquetas/jack_carrosel3.jpg"
import Jacketa5 from "../assets/img/jaquetas/jack_carrosel4.jpg"
import Cards from '../componentes/Cards/card';
import {jacks} from "../componentes/Data/produtos"
import Footer from '../componentes/Footer/Footer';

function Jaquetas(){
    const imagens=[Jacketa1,Jacketa2,Jacketa3,Jacketa4,Jacketa5]
    return(
        <div>
            <Nav/>
            <Carousel imagens={imagens}/>
            <main className='bg-back flex flex-col items-center pt-2'>
                <h1 className='
                            w-full flex items-center justify-center text-4xl mt-5 mb-3
                            cell_m:max-sm:text-3xl'>Jaquetas</h1>
                {/*Jaquets*/}
                <div className='
                            grid grid-cols-5 px-5 gap-x-5 gap-y-10 mb-9
                            md:max-lg:grid-cols-4
                            cell_m:max-sm:grid-cols-2
                            
                            '>
                {jacks.slice(0, 15).map((prod, index)=>(
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
export default Jaquetas;