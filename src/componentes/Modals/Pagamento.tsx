import React, { useState } from "react";
import { Barcode, CreditCard } from "lucide-react";
import { FaPix } from "react-icons/fa6";
import Pix from "../../assets/img/qrcodepix.png"

interface PayProps {
  isOpenPay: boolean;
  closeModalPay: () => void;
}

const Pay: React.FC<PayProps> = ({ isOpenPay, closeModalPay }) => {
  // Não alterar o uso do hook aqui, mesmo com a renderização condicional
  const [metodoPagamento, setMetodoPagamento] = useState<string>("");

  if (!isOpenPay) return null;  // A verificação de visibilidade do modal continua

  const handleclosePay = () => {
    closeModalPay();
  };

  const handleMetodoPagamentoChange = (e: string) => {
    setMetodoPagamento(e);
  };

  return (
    <div 
      className="
              fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-70 
              md:max-lg:px-4
              cell_m:max-sm:px-2 cell_m:max-sm:py-6 
    ">
      <div 
        className="
                  bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full flex flex-col transition-all duration-200
                  cell_m:max-sm:h-full cell_m:max-sm:
      ">
        <div className="mb-8">
          <h1 className="text-2xl">Escolha como Pagar</h1>
        </div>
        <div 
            className="
                      flex gap-5
                      cell_m:max-sm:flex-col
        ">
          <form 
              className="
                        w-1/2 flex flex-col gap-4 mt-0
                        cell_m:max-sm:w-full
          ">
            <div
              className="flex items-center justify-between gap-4 border-b py-3 px-3 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => handleMetodoPagamentoChange("credito")}
            >
              <input
                type="radio"
                name="pagamento"
                id="credito"
                checked={metodoPagamento === "credito"}
                onChange={() => {}}
                className="hidden"
              />
              <label htmlFor="credito">Cartão de Crédito</label>
              <CreditCard />
            </div>
            <div
              className="flex items-center justify-between gap-4 border-b py-3 px-3 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => handleMetodoPagamentoChange("debito")}
            >
              <input
                type="radio"
                name="pagamento"
                id="debito"
                checked={metodoPagamento === "debito"}
                onChange={() => {}}
                className="hidden"
              />
              <label htmlFor="debito">Cartão de Débito</label>
              <CreditCard />
            </div>
            <div
              className="flex items-center justify-between gap-4 border-b py-3 px-3 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => handleMetodoPagamentoChange("boleto")}
            >
              <input
                type="radio"
                name="pagamento"
                id="boleto"
                checked={metodoPagamento === "boleto"}
                onChange={() => {}}
                className="hidden"
              />
              <label htmlFor="boleto">Boleto</label>
              <Barcode />
            </div>
            <div
              className="flex items-center justify-between gap-4 border-b py-3 px-3 rounded-md cursor-pointer hover:bg-gray-200"
              onClick={() => handleMetodoPagamentoChange("pix")}
            >
              <input
                type="radio"
                name="pagamento"
                id="pix"
                checked={metodoPagamento === "pix"}
                onChange={() => {}}
                className="hidden"
              />
              <label htmlFor="pix">Pix</label>
              <FaPix />
            </div>
          </form>

          <div 
            className="
                      w-1/2 flex justify-start 
                      cell_m:max-sm:w-full cell_m:max-sm:justify-center
          ">
            {/* Pagamento Credito */}
            {metodoPagamento === "credito" && (
              <div className="">
                <label htmlFor="numeroCartao" className="">
                  Número do Cartão
                </label>
                <input
                  type="text"
                  id="numeroCartao"
                  placeholder="Digite o número do cartão"
                  className="
                          w-full p-2 border rounded-md outline-none
                          cell_m:max-sm:placeholder:hidden
                  "/>
                
                <label htmlFor="vencimento" className="mt-2">
                  Data de Vencimento
                </label>
                <input
                  type="text"
                  id="vencimento"
                  placeholder="MM/AA"
                  className="w-full p-2 border rounded-md outline-none"
                />
                <label htmlFor="crv">Codigo de Segurança</label>
                <input      
                    type="number"
                    id="crv"
                    placeholder="CRV"
                    className="w-full p-2 border rounded-md outline-none"/>
              </div>
            )}

            {metodoPagamento === "debito" && (
              <div className="flex flex-col gap-1 w-full outline-none">
                <label htmlFor="numeroCartaoDebito">Número do Cartão</label>
                <input
                  type="text"
                  id="numeroCartaoDebito"
                  placeholder="Digite o número do cartão "
                  className="w-full p-2 border rounded-md mb-1 outline-none"
                />
                <label htmlFor="CPF">CPF</label>
                <input
                  type="text"
                  id="CPF"
                  placeholder="CPF"
                  className="w-full p-2 border rounded-md mb-1 outline-none"
                />
                <label htmlFor="CRV">Codigo de Segurança</label>
                <input
                  type="text"
                  id="CRV"
                  placeholder="CRV"
                  className="w-full p-2 border rounded-md outline-none"
                />
              </div>
              
            )}

            {metodoPagamento === "boleto" && (
              <div className="flex flex-col w-full ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu Email"
                  className="w-full p-2 border rounded-md mb-4"
                />
                <label htmlFor="cpfBoleto">CPF</label>
                <input
                  type="text"
                  id="cpfBoleto"
                  placeholder="Digite seu CPF"
                  className="w-full p-2 border rounded-md"
                />
                <button className="mt-3 bg-blue-400 py-2 rounded-lg shadow-neutral-500 shadow-md text-white hover:bg-blue-500 hover:font-semibold ">Gerar</button>
              </div>
            )}

            {metodoPagamento === "pix" && (
              <div className="flex flex-col items-center gap-1">
                <label htmlFor="chavePix" className="text-lg">Chave Pix</label>
                <img src={Pix} alt="" className="w-3/4"/>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button 
                onClick={handleclosePay}
                className="bg-green-400 px-24 py-2 rounded-lg shadow-md shadow-gray-500 hover:bg-green-600 hover:font-semibold hover:text-white">
            Finalizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pay;
