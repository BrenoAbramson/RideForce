import React from "react";
import { useState } from "react";
import { SearchIcon, UserCircleIcon, ShoppingCart, MoonIcon, MenuIcon} from "lucide-react";
import logo from '../../assets/img/logo.png';
import ModalLogin from "../Modals/Modal_login";
import ModalCadastro from "../Modals/Modal_cadastro";
import SideMenu from '../Side/SideMenu';
import { Router, Route, Routes, Link } from 'react-router-dom';
import SearcModal from "../Modals/Search";




function Nav(){
    //Info DropDown Menu
    const [isOpen, setIsOpen] = useState(false);
    //Info Modal_Login
    const [isOpenLogin, setIsOpenLogin] = useState(false);
    //Info Modal_Cadastro
    const [isOpenCadastro, setIsOpenCadastro] = useState(false);
    //Info SideMenu
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const [isOpenSearch, setIsOpenSearch] = useState(false);


    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };

    
    const handleLoginClick = () =>{
        setIsOpenLogin(true);
    };

    const handleCadastroClick = () =>{
        setIsOpenCadastro(true);
    }

    const handleSearchClick = () =>{
        setIsOpenSearch(true);
    }




    return(
            <div>
                <nav 
                    className="w-full
                               flex
                               px-3
                               bg
                               justify-around
                               items-center
                               bg-nav_light
                               flex-wrap"
                >
                    {/* Logo/Nome */}
                    <div className="flex
                                  text-txt
                                    items-center
                                    flex-1
                                    pl-8
                                    cursor-auto
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
                    {/* Barra Pesquisa*/}
                    <div className="relative
                                    flex
                                    items-center
                                    justify-center
                                    px-4
                                    ml-10
                                    flex-1
                                    cell_m:max-sm:hidden
                    ">
                        <SearchIcon className="text-txt
                                                absolute
                                                left-6
                                                size-5
                                                font-bold
                        "/>
                        <input 
                            type="text"
                            id="Search"
                            placeholder=""
                            className=" pl-7
                                        py-1
                                        h-10
                                        w-full
                                        rounded-md
                                        outline-none
                                        bg-transparent
                                        peer
                                        text-txt
                                        text-sm
                                        border
                                        border-accets
                                        "
                        />
                        <label 
                            htmlFor="Search"
                            className="text-txt
                                        absolute
                                        left-12 
                                        top-1/2 
                                        transform 
                                        -translate-y-1/2 transition-all 
                                        duration-500 
                                        text-xs peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-[-3px] peer-focus:left-[30px] peer-focus:bg-bg_primary peer-focus:px-1 peer-focus:text-xs text-tc_primary  peer-focus:text-tc_primary
                                        bg-nav_light"
                        >   
                            Pesquisar...
                        </label>
                    </div>
    
                    {/*Icons Menu */}
                    <div className="flex
                                    flex-1
                                    gap-5
                                    cell_m:max-sm:gap-2
                                    text-txt
                                    justify-end
                                    pr-14
                                    cell_m:max-cell2:pr-4
                                    text-2xl
                    ">
                        <SearchIcon 
                                onClick={handleSearchClick}
                                className="cursor-pointer
                                cell2:max-full:hidden
                                size-6
    
                        "/>
                        <Link to={"/Carrinho"}>
                            <ShoppingCart 
                                    
                                    className="cursor-pointer
                                    
                            "/>
                        </Link>
                        <div
                            onMouseEnter={openMenu}
                            onMouseLeave={closeMenu}
                            className="flex flex-col justify-center items-center"
                        >
                        <UserCircleIcon 
                                className="cursor-pointer
                                cell_m:max-sm:hidden
                        "/>
                        {isOpen && (
                            <div
                                className=" absolute
                                            cursor-pointer
                                            py-3 w-24
                                            bg-accets
                                            shadow-lg
                                            shadow-gray-300
                                            rounded-md
                                            flex
                                            flex-col
                                            gap-2
                                            items-center
                                            justify-center 
                                            text-sm  
                                            top-[-19px]
                                            mt-20
                            ">
                                <button
                                    onClick={() => setIsOpenLogin(true)}
                                    className=" text-black
                                                hover:bg-botao
                                                hover:text-txt
                                                px-6
                                                py-0.5
                                                rounded-sm
                                    ">Login
                                </button>
                                <div className="h-0.5 bg-gray-500 w-full"></div>
                                <button
                                    onClick={() => setIsOpenCadastro(true)}
                                    className="text-black
                                                hover:bg-botao
                                                hover:text-txt
                                                px-3
                                                py-0.5
                                                rounded-sm
                                    ">Cadastrar
                                </button>
    
                            </div>
                        )}
                        </div>
                        <MenuIcon 
                                onClick={toggleSidebar}
                                className="cursor-pointer
                                           cell2:max-full:hidden
                        "/>
                    </div>
                    {/*Divisoria */}
                    <div className="h-0.5 w-full bg-accets rounded-full cell_m:max-sm:hidden"></div>
                    {/*Menu */}
                    <ul className="cell_m:max-sm:hidden flex gap-12 my-2 text-txt">
                        <li className="hover:underline  rounded-lg px-4 py-0.5 cursor-pointer"><Link to="/">Home</Link></li>
                        <li className="hover:underline  rounded-lg px-4 py-0.5 cursor-pointer"><Link to="/Capacetes">Capacetes</Link></li>
                        <li className="hover:underline  rounded-lg px-4 py-0.5 cursor-pointer"><Link to="/Jaquetas">Jaquetas</Link></li>
                        <li className="hover:underline  rounded-lg px-4 py-0.5 cursor-pointer"><Link to="/Luvas">Luvas</Link></li>
                        <li className="hover:underline  rounded-lg px-4 py-0.5 cursor-pointer"><Link to="/Botas">Botas</Link></li>
                        <li className="hover:underline  rounded-lg px-4 py-0.5 cursor-pointer"><Link to="/Pneus">Pneus</Link></li>
                    </ul>
                </nav>
               <ModalLogin
                    isOpenLogin={isOpenLogin}
                    closeModalLogin={() => setIsOpenLogin(false)}
                    onCadastroClick={handleCadastroClick}
                />
                <ModalCadastro
                    isOpenCadastro={isOpenCadastro}
                    closeModalCadastro={() => setIsOpenCadastro(false)}
                    onLoginClick={handleLoginClick}
                />
                <SideMenu
                    openSideMenu={isSidebarOpen}
                    onCloseMenu={() => setIsSidebarOpen(false)}
                    isOpenLogin={() =>{
                        setIsSidebarOpen(false);
                        setIsOpenLogin(true);
                    }}
                    isOpenCadastro={() =>{
                        setIsSidebarOpen(false);
                        setIsOpenCadastro(true);
                    }}
                />
                <SearcModal
                    isOpenSearch={isOpenSearch}
                    closeSearch={()=>setIsOpenSearch(false)}
                />
            </div>
    );
}

export default Nav;