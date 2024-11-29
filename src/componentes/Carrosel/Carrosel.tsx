import React, { useEffect, useState } from "react";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";

import CarouselPrincilpalImg from '../../assets/img/carro_homeprincipal.jpg'
import Carousel2 from '../../assets/img/carro_home01.jpg'
import Carousel3 from '../../assets/img/carro_home02.jpg'

interface CarouselProps{
    imagens: string[];
}
const Carousel: React.FC<CarouselProps> =({imagens}) =>{
    const[currentIndex, setCurrentIndex] = useState(0);
    
    const nextImage = () =>{
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    };

    const prevImage =() =>{
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagens.length - 1 : prevIndex - 1);
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, []);


    return(
        <div className="h-[45rem] 
                        xl:max-2xl:h-[38rem]
                        md:max-lg:h-[28rem]
                        cell_m:max-sm:hidden ">
            <div className="w-full h-full bg-black flex items-center">
                <button onClick={prevImage} className="text-white text-3xl absolute  h-11 w-11 pl-2 pr-8 rounded-r-lg bg-gray-400 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-gray-800"><FaArrowLeft/></button>
                <img    src={imagens[currentIndex]}
                            alt="" 
                            className="w-full h-full bg-cover bg-center "/>

                <button onClick={nextImage} className="text-white text-3xl absolute -right-[0px] pl-1 pr- h-11 w-11 rounded-l-lg bg-gray-400 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-gray-800 "><FaArrowRight/></button>
            
            </div>

        </div>
    )
}

export default Carousel;