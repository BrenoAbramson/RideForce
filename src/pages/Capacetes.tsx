import { useEffect } from 'react';
import Nav from '../componentes/navigation/Nav'
import Carousel from '../componentes/Carrosel/Carrosel';
import Helmet1 from "../assets/img/helmets/helmet_carousel1.jpg"
import Helmet2 from "../assets/img/helmets/helmet_carousel2.jpg"
import Helmet3 from "../assets/img/helmets/helmet_carousel3.jpg"
import Helmet4 from "../assets/img/helmets/helmet_carousel4.jpg"
import Helmet5 from "../assets/img/helmets/helmet_carousel5.jpg"
import Cards from '../componentes/Cards/card';
import {helmet} from "../componentes/Data/produtos"
import Footer from '../componentes/Footer/Footer';



function Capacetes(){
    const imagens=[Helmet1,Helmet2,Helmet3,Helmet4,Helmet5]
    useEffect(() => {
        window.scrollTo(0, 0); // Rola a página para o topo ao carregar
      }, []);
      

    return(
        <div>
            <Nav/>
            <Carousel imagens={imagens}/>
            <main className='
                        bg-back flex flex-col items-center pt-2

            '>
                <h1 className='
                            w-full flex items-center justify-center text-4xl mt-5 mb-3
                            cell_m:max-sm:text-3xl
                '>
                    Capacetes
                </h1>
                {/*Capacetes*/}
                <div className='
                            grid grid-cols-5 px-5 gap-x-5 gap-y-10 mb-9
                            md:max-lg:grid-cols-4
                            cell_m:max-sm:grid-cols-2
                            
                            '>
                {helmet.slice(0, 15).map((prod, index)=>(
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
export default Capacetes;