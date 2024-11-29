import React from "react";
import Logo from '../../assets/img/logo.png'
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



function Footer(){
    return(
        <footer className="bg-nav_light text-white w-full py-2 px-14
                          md:max-lg:px-2  
                          cell_m:max-sm:px-0
        ">
            <div className="w-full flex justify-center items-center
                            md:max-lg:items-start
                            cell_m:max-sm:grid cell_m:max-sm:grid-rows-2 cell_m:max-sm:place-content-center
            ">

                {/* Informacoes Basicas */}
                <div className="
                            flex items-center w-11/12 
                            xl:max-2xl:w-5/6
                            md:max-lg:w-3/4
                            cell_m:max-sm:ml-5
                ">
                    <Link   to={"/"}>
                            <img src={Logo} 
                            alt="RIDEFORCE" 
                            className="w-32 h-32
                                        md:max-lg:w-24 md:max-lg:h-24
                                        cell_m:max-sm:w-32 cell_m:max-sm:h-32 
                            "/>
                            </Link>
                    <div>
                        <Link to={"/"}>
                        <h4 className="text-xl font-name_logo 
                                        md:max-lg:pt-3
                                        
                        ">
                            RIDEFORCE
                        </h4></Link>
                        <p className="text-sm w-48 md:max-lg:text-start 
                                    md:max-lg:w-44
                        ">  Sua parceira em equipamentos para motos desde 2024.
                        </p>
                    </div>
                </div>

                <div className="flex justify-between w-full pr-4">
                    {/* Informacoes */}
                    <div className="
                                    flex-1 flex flex-col justify-center
                                    md:max-lg:mt-2
                                    
                    ">
                        <h5 className="font-semibold text-lg ">Informações Úteis</h5>
                        <div className="text-sm">
                            <Link to={"/"} className="cursor-pointer hover:underline">Sobre nós</Link>
                            <p className="hover:underline cursor-pointer">(35) 99999-9999</p>
                            <p className="hover:underline cursor-pointer">Perguntas Frequentes</p>
                        </div>
                    </div>
    
                    {/* Redes Sociais */}
                    <div className=" 
                                    md:max-lg:ml-0 md:max-lg:mt-1
                                    
                        ">
                        <div className="flex justify-center">
                            <h5 className="font-semibold mb-2 cell_m:max-sm:text-lg">Siga-nos</h5>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <FaFacebookSquare className=" w-6 h-6 hover:text-facebook cursor-pointer transition-transform transform duration-300 hover:scale-150"/>
                            <FaInstagram className=" w-6 h-6 cursor-pointer hover:text-instagram transition-transform transform duration-300 hover:scale-150"/>
                            <FaXTwitter className=" w-6 h-6 cursor-pointer hover:text-twitter transition-transform transform duration-300 hover:scale-150"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 ml-10 flex justify-center text-xs">
                <p>© 2024 RIDEFORCE. Todos os direitos reservados.</p>
            </div>
        </footer>

    );
};

export default Footer;