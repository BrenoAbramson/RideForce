import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
interface SearchProps {
  isOpenSearch: boolean;
  closeSearch: () => void;
}

const SearcModal: React.FC<SearchProps> = ({ isOpenSearch, closeSearch }) => {


  if (!isOpenSearch) return null;  

  const handlecloseSearch = () => {
    closeSearch();
  };


  return (
    <div 
      className="
              fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-70 z-50
              md:max-lg:px-4
              cell_m:max-sm:px-2 cell_m:max-sm:py-6 
    ">
      <div 
        className="
                  bg-white rounded-lg shadow-lg max-w-3xl w-full flex flex-col
                  cell_m:max-sm:py-2 cell_m:max-sm:px-3
      ">
        <h1 className="pb-3 text-xl">Pesquisa...</h1>
        <input 
            type="text"
            className="border py-2 px-2 rounded-md outline-none "
        />
        <div className="flex justify-center py-4">
            <SearchIcon
                    className="bg-blue-500 w-20 h-7 rounded-md hover:bg-blue-700 hover:text-txt "
                    onClick={handlecloseSearch}
            />
        </div>
      </div>
    </div>
  );
};

export default SearcModal;
