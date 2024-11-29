import React, { useState, useEffect } from "react";
import Nav from "../componentes/navigation/Nav";
import CardCarrinho from "../componentes/Cards/CardCarrinho";
import { ShieldCheckIcon } from "lucide-react";
import Buy from "../assets/img/pagamento.png";
import Footer from "../componentes/Footer/Footer";
import { Link } from "react-router-dom";
import Pay from "../componentes/Modals/Pagamento";

function Carrinho() {
  const [produtosComprados, setProdutosComprados] = useState<any[]>(() => {
    return JSON.parse(localStorage.getItem("produtosComprados") || "[]");
  });
  const [resumo, setResumo] = useState({
    totalProdutos: 0,
    frete: 20,
    totalGeral: 0,
  });

  // Função para atualizar o resumo dos valores sempre que os produtos mudarem
  const atualizarResumo = (produtos: any[]) => {
    const totalProdutos = produtos.reduce(
      (acc: number, item: any) => acc + item.preco * item.quantidade,
      0
    );

    const totalGeral = totalProdutos + 20; // Considerando o frete fixo de R$ 20

    setResumo({
      totalProdutos,
      frete: 20,
      totalGeral,
    });
  };

  useEffect(() => {
    // Atualiza o resumo sempre que o carrinho mudar
    atualizarResumo(produtosComprados);
  }, [produtosComprados]);

  // Função para remover produto
  const handleRemoverProduto = (id: number, categoria: string) => {
    const novosProdutos = produtosComprados.filter(
      (item) => item.id !== id || item.categoria !== categoria
    );
    localStorage.setItem("produtosComprados", JSON.stringify(novosProdutos));
    setProdutosComprados(novosProdutos); // Atualiza o estado para refletir a remoção
  };

  // Função para aumentar a quantidade
  const handleAumentarQuantidade = (id: number, categoria: string) => {
    const novosProdutos = produtosComprados.map((item) =>
      item.id === id && item.categoria === categoria
        ? {
            ...item,
            quantidade: item.quantidade + 1,
            preco: (item.preco / item.quantidade) * (item.quantidade + 1),
          }
        : item
    );
    localStorage.setItem("produtosComprados", JSON.stringify(novosProdutos));
    setProdutosComprados(novosProdutos); // Atualiza o estado com a nova quantidade
  };

  // Função para diminuir a quantidade
  const handleDiminuirQuantidade = (id: number) => {
    const novosProdutos = produtosComprados.map((item) =>
      item.id === id
        ? {
            ...item,
            quantidade: item.quantidade > 1 ? item.quantidade - 1 : 1,
            preco:
              item.quantidade > 1
                ? item.preco - item.preco / item.quantidade
                : item.preco,
          }
        : item
    );
    localStorage.setItem("produtosComprados", JSON.stringify(novosProdutos));
    setProdutosComprados(novosProdutos); // Atualiza o estado com a nova quantidade
  };

  const [isOpenPay, setIsOpenPay] = useState(false);
  const handleOpenPay = () =>{
    setIsOpenPay(true);
};

  return (
    <div className="bg-back">
      <Nav />
      <div 
        className="
                mt-8 grid grid-cols-2 w-full pl-32 
                xl:max-2xl:mt-3 xl:max-2xl:pl-8
                md:max-lg:grid-cols-1 md:max-lg:pl-3 md:max-lg:pr-3
                cell_m:max-sm:grid-cols-1  cell_m:max-sm:pl-0 cell_m:max-sm:pr-2
      ">
        <div className="">
          <CardCarrinho
            produtosComprados={produtosComprados}
            handleRemoverProduto={handleRemoverProduto}
            handleAumentarQuantidade={handleAumentarQuantidade}
            handleDiminuirQuantidade={handleDiminuirQuantidade}
          />
        </div>
        {/* Compra */}
        <div 
          className="
                  flex justify-center mb-14 h-[40rem]  
                  xl:max-2xl:h-[38rem] xl:max-2xl:w-[45rem]
                  md:max-lg:w-[50rem]
                  cell_m:max-sm:justify-normal cell_m:max-sm:w-full cell_m:max-sm:px-2 cell_m:max-sm:pl-4
        ">
          <div 
            className="
                    shadow-md shadow-slate-400 rounded-md w-1/2 mt-6 px-5
                    cell_m:max-sm:w-full

          ">
            <h1 className="font-semibold text-xl mt-4 mb-12">Resumo</h1>
            <div className="flex justify-between mt-8 mb-3">
              <p className="text-gray-400">Produto(s):</p>
              <p className="text-gray-400">
                R$ {resumo.totalProdutos.toFixed(2)}
              </p>
            </div>
            <div className="w-full h-0.5 bg-slate-300 rounded-xl"></div>
            <div className="flex justify-between mt-8 mb-3">
              <p className="text-gray-400">Frete:</p>
              <p className="text-gray-400">
                R$ {resumo.frete.toFixed(2)}
              </p>
            </div>
            <div className="w-full h-0.5 bg-slate-300 rounded-xl"></div>
            <div className="flex justify-between mt-8 mb-12">
              <p className="text-black">Total:</p>
              <p className="text-black">
                R$ {resumo.totalGeral.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col my-8">
              <Link className="w-" to={"/"}>
                <button className="bg-botao mb-3 py-3 rounded-lg text-white shadow-lg shadow-slate-400 hover:bg-hoverBorder hover:font-semibold w-full">
                  Adicionar mais produto!
                </button>
              </Link>

              
                <button 
                    onClick={handleOpenPay}
                    className="bg-blue-800 mb-3 py-3 rounded-lg text-white shadow-lg shadow-slate-400 hover:bg-hoverBorder hover:font-semibold w-full">
                  Continuar
                </button>

              <p className="flex justify-center text-green-400 font-bold gap-1 my-3">
                <ShieldCheckIcon />
                Compra Segura
              </p>
              <div className="flex flex-col justify-center items-center gap-3 mt-3">
                <p className="text-sm text-gray-700">Pague com:</p>
                <img src={Buy} alt="" className="h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Pay
            isOpenPay={isOpenPay}
            closeModalPay={() => setIsOpenPay(false)}
        />
    </div>
  );
}

export default Carrinho;
