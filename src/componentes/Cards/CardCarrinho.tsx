import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { XIcon, MinusIcon, Plus } from "lucide-react";

// Definindo a interface do Produto
interface Produto {
  id: number;
  titulo: string;
  preco: number;
  imagem: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  quantidade: number;
  categoria: string;
  descricao: string;
  cor: string;
}

// Definindo a interface das props do CardCarrinho
interface CardCarrinhoProps {
  produtosComprados: Produto[];
  handleRemoverProduto: (id: number, categoria: string) => void;
  handleAumentarQuantidade: (id: number, categoria: string) => void;
  handleDiminuirQuantidade: (id: number) => void;
}

const CardCarrinho: React.FC<CardCarrinhoProps> = ({
  produtosComprados,
  handleRemoverProduto,
  handleAumentarQuantidade,
  handleDiminuirQuantidade,
}) => {
  return (
    <div className="mt-3 ">
      <h1 
        className="
                  text-2xl mb-10
                  cell_m:max-sm:px-4
      ">
        Meu Carrinho
      </h1>
      <div className="flex flex-col">
        {produtosComprados.map((item, index) => (
          <li key={index} 
              className="
                      flex items-center justify-around gap-10 mb-8 border-b
                      cell_m:max-sm:flex-col
          ">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={item.imagem}
                alt={item.titulo}
                width={100}
                className="bg-back border-slate-300 border rounded-md"
              />
              <div className="flex flex-col items-start mb-3">
                <h3 className="text-lg font-semibold">{item.titulo}</h3>
                <p className="text-sm">{item.descricao}</p>
                <p className="text-sm">Cor: {item.cor}</p>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div className="flex">
                <button
                  onClick={() => handleDiminuirQuantidade(item.id)}
                  className="border outline-none"
                >
                  <MinusIcon />
                </button>

                <p
                  className="border w-10 flex justify-center  outline-none"
                >{item.quantidade}</p>

                <button
                  onClick={() => handleAumentarQuantidade(item.id, item.categoria)}
                  className="border outline-none"
                >
                  <Plus />
                </button>
              </div>
              <div className="flex flex-col items-center w-20">
                <p>Preço: </p>
                <p>R$ {item.preco}</p>
              </div>

              <button
                onClick={() => handleRemoverProduto(item.id, item.categoria)}
                className="bg-botao text-white text-md rounded-sm hover:bg-hoverBorder px-3 py-1 shadow-md shadow-gray-400"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default CardCarrinho;
