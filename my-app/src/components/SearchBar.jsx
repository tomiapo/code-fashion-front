import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const SearchBar = () => {
  const { searchBarHandler, searchBarParam } = useContext(ProductContext);

  return (
    <div className="border-solid border-indigo-600">
      <input
        value={searchBarParam}
        onChange={searchBarHandler}
        type="text"
        placeholder="Busca productos"
        className="text-sm  px-2 py-1 w-full sm:w-80 my-1 mx-2 border-solid border-2 border-indigo-600 rounded-md"
      />
    </div>
  );
};

export default SearchBar;
