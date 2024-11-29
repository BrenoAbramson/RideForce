import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { helmet, jacks, gloves, tires, boot } from "../componentes/Data/produtos"; // Importe todos os arrays
import Nav from "../componentes/navigation/Nav";
import { FaStar } from "react-icons/fa";
import Footer from "../componentes/Footer/Footer";
import { Link } from "react-router-dom";




const Detalhes: React.FC = () => {
  const { id, categorias } = useParams<{ id: string; categorias: string }>();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página para o topo ao carregar
  }, []);
  

  // Define as categorias e os produtos
  const categoriasMap = {
    helmet,  // Capacetes
    jacks,   // Jaquetas
    gloves,  // Luvas
    tires,   // Pneus
    boot,    // Botas
  };

  // Encontra os produtos da categoria selecionada
  const produtos = categoriasMap[categorias as keyof typeof categoriasMap];
  const produto = produtos?.find((item) => item.id === parseInt(id || "0"));
  const [imagemCentral, setImagemCentral] = useState(produto?.img1 || ""); 

  if (!produto) {
    return <p>Produto não encontrado!</p>;
  }

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const handleComprarAgora = () => {
    const produtoComprado = { ...produto, quantidade: 1, categoria: categorias }; 
    
    const produtosNoLocalStorage = JSON.parse(localStorage.getItem('produtosComprados') || '[]');
    
    const produtoExistenteIndex = produtosNoLocalStorage.findIndex(
      (item: { id: number, categoria: string }) => item.id === produto.id && item.categoria === categorias
    );
    
    if (produtoExistenteIndex === -1) {
      
      produtosNoLocalStorage.push(produtoComprado);
    }
  
    localStorage.setItem('produtosComprados', JSON.stringify(produtosNoLocalStorage));
    
    navigate("/Carrinho", { state: { produtosComprados: produtosNoLocalStorage } });
  };

  const handleAddCar = () => {
    const produtoComprado = { ...produto, quantidade: 1, categoria: categorias };
  
    const produtosNoLocalStorage = JSON.parse(localStorage.getItem('produtosComprados') || '[]');
    

    const produtoExistenteIndex = produtosNoLocalStorage.findIndex(
      (item: { id: number, categoria: string }) => item.id === produto.id && item.categoria === categorias
    );
  
    if (produtoExistenteIndex === -1) {
      produtosNoLocalStorage.push(produtoComprado);
    } else {
      produtosNoLocalStorage[produtoExistenteIndex].quantidade += 1;
    }
  
    localStorage.setItem('produtosComprados', JSON.stringify(produtosNoLocalStorage));
  
    alert("Produto adicionado ao carrinho!");
  };
  

  return (
    <div className="flex-col h-screen w-full bg-back">
      <Nav />
      <section className="
                    w-full flex flex-col justify-center items-center px-12
                    md:max-lg:px-2
                    cell_m:max-sm:px-1

      ">
        <div className="
                    flex bg-back w-full justify-around px-10 pt-8 gap-4 pr-14 rounded-lg pb-16
                    xl:max-2xl:py-3 xl:max-2xl:pt-7
                    md:max-lg:px-0 md:max-lg:gap-3 md:max-lg:pr-4 md:max-lg:py-20 md:max-lg:pb-32
                    cell_m:max-sm:flex-col cell_m:max-sm:px-0 cell_m:max-sm:pb-5 cell_m:max-sm:py-0
        ">
          <div className="bg-back flex pt-4 mb-0.5">
            {/* Imagens */}
            <div className="w-24 flex flex-col gap-2 p-2">
              <div className="bg-transparent border border-gray-400 rounded-xl hover:border-black cursor-pointer" onClick={() => setImagemCentral(produto.img1)}>
                <img src={produto.img1} alt="" />
              </div>
              <div className="bg-transparent border border-gray-400 rounded-xl hover:border-black cursor-pointer" onClick={() => setImagemCentral(produto.img2)}>
                <img src={produto.img2} alt="" />
              </div>
              <div className="bg-transparent border border-gray-400 rounded-xl hover:border-black cursor-pointer" onClick={() => setImagemCentral(produto.img3)}>
                <img src={produto.img3} alt="" />
              </div>
              <div className="bg-transparent border border-gray-400 rounded-xl hover:border-black cursor-pointer" onClick={() => setImagemCentral(produto.img4)}>
                <img src={produto.img4} alt="" />
              </div>
            </div>

            {/* Imagem Central */}
            <div className="">
              <img
                src={imagemCentral}
                alt=""
                className="
                        w-[30rem] h-[30rem] relative bottom-14
                        md:max-lg:w-[24rem] md:max-lg:h-[24rem]
                        cell_m:max-sm:w-[20rem] cell_m:max-sm:h-[20rem] cell_m:max-sm:bottom-0
              "/>
            </div>
          </div>

          {/* Descrição */}
          <div className="
                      flex flex-col gap-1
                      cell_m:max-sm:px-3
          ">
            <h1 className="text-2xl text-justify mb-1 font-bold
            ">
              {produto.titulo}
            </h1>
            <p className="flex items-center gap-2 text-sm mb-3">
              4.8{" "}
              <p className="flex gap-0.5 text-yellow-400 text-lg">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            </p>
            <p className="
                      text-3xl mb-3 font-bold
                      md:max-lg:text-2xl md:max-lg:mb-1
            ">
              R$ {produto.preco}
            </p>
            <h3 className="pl-7 font-bold">Tamanho {produto.tipo}:</h3>
            <div className="flex gap-4 px-1 mb-4 ">
              {["PP", "P", "M", "G", "GG"].map((size) => (
                <p
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`border border-slate-600 px-2 py-0 cursor-pointer rounded-sm ${
                    selectedSize === size
                      ? "bg-botao text-white"
                      : "hover:bg-hoverBorder hover:text-white"
                  }`}
                >
                  {size}
                </p>
              ))}
            </div>
            <div className="flex gap-3 mb-3">
              <button
                type="submit"
                onClick={handleComprarAgora}
                className="
                      bg-botao text-white px-6 py-2 rounded-md  shadow-md shadow-neutral-600 hover:bg-hoverBorder underline
                      md:max-lg:px-2 
                ">
                Comprar agora
              </button>
              <button
                type="submit"
                onClick={handleAddCar}
                className=" 
                      bg-botao px-3 py-2 rounded-md text-white shadow-md shadow-neutral-600 hover:bg-hoverBorder underline hover:text-white
                      md:max-lg:px-3 
                ">
                Adicionar ao carrinho
              </button>
            </div>
            <p className="
                    font-bold
                    md:max-lg:text-base
            ">
              O que você precisa saber sobre este produto
            </p>
            <ul className="
                        text-justify text-xs w-96 pl-1.5 flex flex-col gap-1
                        md:max-lg:w-80
                        cell_m:max-sm:w-72
            ">
              <li>Desenho de uma peça única, para maior proteção do rosto, o queixo e a cabeça.</li>
              <li>Recomendado para urbano.</li>
              <li>Interior removível para limpeza fácil.</li>
              <li>É adequado para uma circunferência de cabeça de 54cm.</li>
              <li>Com exterior de resina termoplástica abs, o que garante leveza e grande resistência.</li>
              <li>Regras de segurança: Certificado pelo inmetro.</li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Detalhes;
