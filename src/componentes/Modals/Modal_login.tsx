import React from "react";
import {X} from "lucide-react";

interface ModalProps{
    isOpenLogin: boolean;
    closeModalLogin: () => void;
    onCadastroClick: () => void;
}

const ModalLogin: React.FC<ModalProps> = ({isOpenLogin, closeModalLogin, onCadastroClick}) =>{
    if(!isOpenLogin) return null;

    const handleCadastroClick = () =>{
        closeModalLogin();
        onCadastroClick();
        

    } 


    return(
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-500 bg-opacity-70 cell_m:max-sm:px-4 z-50 ">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transition-all duration-200  ">
                <div className="flex justify-between items-center mb-3">
                    <h1>LOGIN</h1>
                    <button
                        className="hover:bg-gray-200 rounded-full p-1"
                        onClick={closeModalLogin}
                    >
                        <X/>
                    </button>
                </div>
                <div className="h-0.5 bg-gray-400 w-full rounded-xl mb-2"></div>
                <form 
                    action="">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="">Email</label>
                        <input  className="outline-none  rounded-md pl-2 py-2 text-gray-700 bg-gray-200 placeholder-gray-500"
                                type="emai"
                                placeholder="Digite seu Email"
                                required />
                        <label htmlFor="">Senha</label>
                        <input  className="outline-none  rounded-md pl-2 py-2 text-gray-700 bg-gray-200 placeholder-gray-500"
                                type="password"
                                name="" 
                                id="" 
                                placeholder="Digite sua Senha"
                                required />
                        <div className="flex justify-between items-center mt-2">
                            <label htmlFor="check" className="flex justify-center gap-1 cursor-pointer ">
                                <input  type="checkbox" 
                                        name="check" 
                                        id="check" 
                                        className=" cursor-pointer 
                                "/> Lembrar-me!</label>
                            <a href="" className="hover:underline">Esqueceu a senha?</a>
                        </div>
                    </div>
                <div className="flex flex-col justify-center items-center gap-2 mt-4 ">
                    <button className="bg-botao rounded-x px-20 py-2 hover:bg-hoverBorder text-white rounded-lg">Entrar</button>
                    <p className="text-xs cursor-pointer text-gray-700 hover:text-black hover:underline font-sans" onClick={handleCadastroClick}>CRIAR UMA CONTA</p>

                </div>
                </form>
            
            </div>
        </div>
    )
}

export default ModalLogin;