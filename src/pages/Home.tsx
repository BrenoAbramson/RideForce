import Carousel from '../componentes/Carrosel/Carrosel';
import Nav from '../componentes/navigation/Nav'
import Cards from '../componentes/Cards/card';
import {helmet, jacks, tires, boot, gloves} from "../componentes/Data/produtos"
import Logo from '../assets/img/logo.png'
import { Router, Route, Routes, Link } from 'react-router-dom';
import Footer from '../componentes/Footer/Footer';
import CarouselImg1 from '../assets/img/carro_homeprincipal.jpg'
import CarouselImg2 from '../assets/img/carro_home01.jpg'
import CarouselImg3 from '../assets/img/carro_home02.jpg'
import CarouselImg4 from '../assets/img/carro_home03.jpg'
import CarouselImg5 from '../assets/img/carro_home04.jpg'
import CarouselImg6 from '../assets/img/carro_home05.jpg'
import CarouselImg7 from '../assets/img/carro_home06.jpg'
import CarouselImg8 from '../assets/img/carro_home07.jpg'




function Home(){
    const imagens= [CarouselImg1, CarouselImg2, CarouselImg3, CarouselImg4, CarouselImg5, CarouselImg6, CarouselImg7, CarouselImg8]
    return(
        <div className='bg-back'>
            <Nav/>
            <Carousel imagens={imagens}/>
            
            <main className='flex flex-col items-center pt-2 w-full px-12
                            md:max-lg:px-3
                            cell_m:max-sm:px-2
            '>
                <h1 className='
                                text-4xl text-gray-900  mt-5 mb-9
                                cell_m:max-sm:text-3xl
                '>
                    Produtos Destaques
                </h1>
                <div className='flex mb-10 gap-5
                                md:max-lg:gap-3
                                cell_m:max-sm:gap-3


                                
                '>
                    {/*Capacetes*/}
                    <div className='flex flex-col w-full  items-center gap-5 
                                    
                                    
                                    
                    '>
                    {helmet.slice(0, 2).map((prod, index)=>(
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

                    {/*Jaquetas*/}
                    <div className='flex flex-col w-full  items-center gap-5
                                    
                    '>
                    {jacks.slice(0, 2).map((prod, index)=>(
                        <Cards 
                            key={index}
                            id={prod.id}
                            titulo={prod.titulo} 
                            imagem={prod.imagem} 
                            descricao={prod.descricao}
                            preco={prod.preco} 
                            botao={prod.botao}
                            categorias='jacks'
                        />
                    ))}
                    </div>

                    {/*Luvas*/}
                    <div className='
                                    flex flex-col w-full  items-center gap-5 
                                    cell_m:max-sm:hidden
                                    
                    '>
                    {gloves.slice(0, 2).map((prod, index)=>(
                        <Cards 
                            key={index}
                            id={prod.id}
                            titulo={prod.titulo} 
                            imagem={prod.imagem} 
                            descricao={prod.descricao}
                            preco={prod.preco} 
                            botao={prod.botao}
                            categorias='gloves'
                        />
                    ))}
                    </div>

                    {/*Botas*/}
                    <div className='
                                    flex flex-col w-full  items-center gap-5
                                    cell_m:max-sm:hidden
                                    
                    '>
                    {boot.slice(0, 2).map((prod, index)=>(
                        <Cards 
                            key={index}
                            id={prod.id}
                            titulo={prod.titulo} 
                            imagem={prod.imagem} 
                            descricao={prod.descricao}
                            preco={prod.preco} 
                            botao={prod.botao}
                            categorias='boot'
                        />
                    ))}
                    </div>

                    {/*Pneus*/}
                    <div className='flex flex-col w-full  items-center gap-5
                                    cell_m:max-lg:hidden
                                    
                                    
                    '>
                    {tires.slice(0, 2).map((prod, index)=>(
                        <Cards 
                            key={index}
                            id={prod.id}
                            titulo={prod.titulo} 
                            imagem={prod.imagem} 
                            descricao={prod.descricao}
                            preco={prod.preco} 
                            botao={prod.botao}
                            categorias='tires'
                        />
                    ))}
                    </div>
                </div>
                
            </main>
            {/*Historia */}
            <section className='w-full flex flex-col bg-gray-100 px-32
                                xl:max-2xl:px-24
                                cell_m:max-sm:px-3
                                
                                
            '>
                    <h1 className='
                                    w-full flex items-center justify-center text-4xl mt-5
                                    cell_m:max-sm:text-3xl
                                    
                                   
                    '>
                        História da RIDEFORCE
                    </h1>
                <div className='flex justify-center items-center 
                                md:max-lg:flex-col-reverse md:max-lg:px-0
                                cell_m:max-sm:flex-col-reverse
                '>
                    <div className='flex-1   rounded-xl  text-justify
                                    
                    '>
                        <p className='mb-4'>
                            Em 2024, Breno Abramson transformou sua paixão por motocicletas em um projeto visionário: a RIDEFORCE, uma loja de autopeças online especializada exclusivamente no universo das motos. Com foco em itens essenciais como capacetes, jaquetas, luvas, botas e pneus, a RIDEFORCE foi criada para atender aos motociclistas que buscam qualidade, segurança e estilo em um só lugar.
                        </p>
                        <p className='mb-4'>
                            Desde o início, a missão foi clara: oferecer produtos que proporcionem conforto e proteção nas estradas, garantindo a confiança de quem pilota. Cada item disponível na loja é selecionado com rigor, sempre priorizando marcas reconhecidas e tecnologia de ponta.
                        </p>
                        <p className='mb-4'>
                            A experiência de compra na RIDEFORCE é tão ágil quanto uma moto em alta velocidade. Breno, com sua dedicação e visão de futuro, integrou inovação e simplicidade ao e-commerce, facilitando o acesso de clientes de todo o Brasil a equipamentos indispensáveis para a jornada de quem vive sobre duas rodas.
                        </p>
                        <p className='mb-8'>
                            Mais do que uma loja, a RIDEFORCE é um ponto de encontro para apaixonados por motos, um lugar onde segurança e desempenho se encontram. E, para Breno Abramson, o caminho da RIDEFORCE não para por aqui — ele está apenas acelerando.  
                        </p>
                    </div>
                    <div className='flex-1 pb-10
                                    
                    '>
                        <img 
                            src={Logo} 
                            alt="Logo RIDEFORCE" 
                            className=' scale-x-105
                        '/>
                    </div>
                </div>
            </section>
            <Footer/>

            
        </div>
    )
}
export default Home;