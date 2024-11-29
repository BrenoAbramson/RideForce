import React from "react"
import {X} from "lucide-react";

interface ModalProps{
    isOpenCadastro: boolean;
    closeModalCadastro:() => void;
    onLoginClick:() => void;
}

const ModalCadastro: React.FC<ModalProps> = ({isOpenCadastro, closeModalCadastro, onLoginClick}) =>{
    if(!isOpenCadastro) return null;

    const handleLoginClick = () =>{
        closeModalCadastro();
        onLoginClick();
    }

    return(
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-70 cell_m:max-sm:px-4 z-50 ">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full flex flex-col transition-all duration-200 ">
                <div className="flex justify-between mb-2 items-center">
                    <h1 className="text-lg">Criar Conta</h1>
                    <button
                        onClick={closeModalCadastro}
                        className="hover:bg-gray-200 rounded-full "
                    >
                        <X/>
                    </button>
                </div>
                <div className="h-0.5 bg-gray-400 w-full rounded-xl mt-2 mb-3"></div>
                <form 
                    action="">
                    <div className="grid  grid-cols-2 grid-rows-3 gap-3 mb-3 cell_m:max-sm:flex cell_m:max-sm:flex-col">
                        <div>
                            <label htmlFor="name" className="block pl-1">Nome</label>
                            <input  className="outline-none rounded-md pl-2 py-2 w-80 text-gray-700 bg-gray-200 placeholder-gray-500"
                                    type="text"
                                    id="name"
                                    placeholder=""
                                    required 
                            />
                        </div>
                        <div>
                            <label htmlFor="pass" className="block pl-1">Senha</label>
                            <input  className="outline-none rounded-md pl-2 py-2 w-80 text-gray-700 bg-gray-200 placeholder-gray-500"
                                    type="password"
                                    id="pass"
                                    placeholder=""
                                    required 
                            />
                        </div>
                        <div>
                            <label htmlFor="cpf" className="block pl-1">CPF</label>
                            <input  className="outline-none rounded-md pl-2 py-2 w-80 text-gray-700 bg-gray-200 placeholder-gray-500"
                                    type="text"
                                    id="Cpf"
                                    placeholder=""
                                    required 
                            />
                        </div>
                        <div>
                            <label htmlFor="pass_c" className="block pl-1">Confirmar Senha</label>
                            <input  className="outline-none rounded-md pl-2 py-2 w-80 text-gray-700 bg-gray-200 placeholder-gray-500"
                                    type="password"
                                    id="pass_c"
                                    placeholder=""
                                    required 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block pl-1">Email</label>
                            <input  className="outline-none rounded-md pl-2 py-2 w-80 text-gray-700 bg-gray-200 placeholder-gray-500"
                                    type="emai"
                                    id="email"
                                    placeholder=""
                                    required 
                            />
                        </div>
                    </div>
                    
                <div className="w-full flex items-center justify-center mt-5">
                    <button className="bg-botao rounded-md w-1/2 px-20 py-2  hover:bg-hoverBorder text-white cell_m:max-sm:px-5 " type="submit">CRIAR CONTA</button>
                </div>
                </form>
                <div className="flex justify-center">
                    <p
                        onClick={handleLoginClick}
                        className="cursor-pointer text-gray-600 hover:underline hover:text-gray-900 text-sm mt-3"
                        
                    >Já Possui uma Conta?</p>
                    
                </div>
            
            </div>
        </div>
    )
};

export default ModalCadastro;