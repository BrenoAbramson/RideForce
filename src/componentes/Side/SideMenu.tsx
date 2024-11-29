import React, {useState} from "react";
import {X} from 'lucide-react';
import logo from '../../assets/img/logo.png';
import { GiFullMotorcycleHelmet,GiSleevelessJacket,GiGloves,GiFlatTire,GiSteeltoeBoots } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { Router, Route, Routes, Link } from 'react-router-dom';






interface SideMenuProps{
    openSideMenu: boolean;
    onCloseMenu: () => void;
    isOpenLogin: () => void;
    isOpenCadastro: () => void
}

const SideMenu: React.FC<SideMenuProps> = ({openSideMenu,onCloseMenu, isOpenLogin, isOpenCadastro}) =>{


    return(
        <div
            className={`fixed top-0 left-0 h-full bg-nav_light text-white transition-transform duration-500 z-50 ${
                openSideMenu ?  " translate-x-0 opacity-100 visible": "-translate-x-full  opacity-0 invisible"
            }w-64 shadow-lg`}
        >
            {/*Logo e botao de sair */}
            <div className="flex gap-5">
                <div className="flex
                                  text-white
                                    items-center
                                    flex-1
                                    pl-8
                                    cell_m:max-cell2:p-0
                    ">
                        <Link to={"/"}>
                            <img src={logo}
                                 alt="RideForce"
                                 className="w-24 h-auto
                                            cursor-pointer
        
                            "/>
                        </Link>
                        <Link to={"/"}>
                            <h1 className="font-name_logo
                                           text-xl
                                           cursor-pointer"
                            >
                                RIDEFORCE
                            </h1>
                        </Link>
                    </div>
                <button
                    className="pr-3"
                    onClick={onCloseMenu}
                >
                    <X className="hover:bg-hoverBorder rounded-full"/>
                </button>
    
            </div>
            {/*Divisor */}
            <div className="h-0.5 w-11/12 ml-2 mb-4 rounded-full bg-white "></div>

            {/*Botoes de login/cadastro */}
            <div className="flex flex-col gap-1 mt-1 px-4">
                <button 
                    onClick={isOpenLogin}
                    className="bg-hoverBorder  px-2 py-1 rounded-md flex justify-between items-center  ">
                    Login<FiLogIn className="text-xl"/>
                </button>
                <button 
                    onClick={isOpenCadastro}
                    className="bg-hoverBorder  px-2 py-1 rounded-md  flex justify-between items-center ">
                    Cadastrar<BsFillPersonCheckFill className="text-xl"/>
                </button>
            </div>

            {/*Menu*/}
            <div className="p-3 space-y-3">
                <Link to='/'><p className="cursor-pointer flex items-center justify-between px-3 hover:bg-hoverBorder py-1  hover:rounded-lg">Home <FaHome className="text-xl"/></p></Link>
                <Link to="/Capacetes"><p className="cursor-pointer flex items-center justify-between px-3 hover:bg-hoverBorder py-1  hover:rounded-lg">Capacetes <GiFullMotorcycleHelmet className="text-xl"/></p></Link>
                <Link to="/Jaquetas"><p className="cursor-pointer flex items-center justify-between px-3 hover:bg-hoverBorder py-1  hover:rounded-lg">Jaquetas <GiSleevelessJacket className="text-xl"/></p></Link>
                <Link to="/Luvas"><p className="cursor-pointer flex items-center justify-between px-3 hover:bg-hoverBorder py-1  hover:rounded-lg">Luvas<GiGloves className="text-xl"/></p></Link>
                <Link to="/Botas"><p className="cursor-pointer flex items-center justify-between px-3 hover:bg-hoverBorder py-1  hover:rounded-lg">Botas<GiSteeltoeBoots className="text-xl"/></p></Link>
                <Link to="/Pneus"><p className="cursor-pointer flex items-center justify-between px-3 hover:bg-hoverBorder py-1  hover:rounded-lg">Pneus<GiFlatTire className="text-xl"/></p></Link>
            </div>
            
        </div>
    )
}

export default SideMenu;