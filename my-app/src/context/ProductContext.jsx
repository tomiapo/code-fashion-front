import { useEffect, useState, createContext } from "react";
import axios from "axios";
import { searchProducts } from "../utils/searchBar.utils";

export const ProductContext = createContext({
  products: [],
  searchBarParam: "",
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchBarParam, setSearchBarParam] = useState("");

  const searchBarHandler = (e) => {
    setSearchBarParam(e.target.value);
  };

  const productPreview = async () => {
    try {
      if (searchBarParam.length > 1) {
        const foundProducts = await searchProducts(searchBarParam);
        setProducts(foundProducts);
      } else {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
      }
    } catch (error) {
      return { msg: "Error retrieving products", error };
    }
  };

  return (
    <ProductContext.Provider
      value={{ products, searchBarParam, searchBarHandler, productPreview }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
