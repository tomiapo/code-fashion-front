import { useState, createContext } from "react";
import axios from "axios";
import { searchProducts } from "../utils/searchBar.utils";
import { getProductsByCategory } from "../utils/categories.utils";

export const ProductContext = createContext({
  products: [],
  searchBarParam: "",
  selectedCategory: "all",
});

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchBarParam, setSearchBarParam] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const searchBarHandler = (e) => {
    setSearchBarParam(e.target.value);
  };

  const categoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchBarParam("");
  };

  const productPreview = async () => {
    try {
      console.log("cat", selectedCategory, "param", searchBarParam);
      if (selectedCategory && searchBarParam.length > 1) {
        let foundProducts = await getProductsByCategory(selectedCategory);

        foundProducts = foundProducts.filter((product) =>
          product.name.toLowerCase().includes(searchBarParam.toLowerCase())
        );
        setProducts(foundProducts);
      } else {
        const foundProducts = await getProductsByCategory(selectedCategory);
        setProducts(foundProducts);
      }
    } catch (error) {
      return { msg: "Error retrieving products", error };
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        searchBarParam,
        searchBarHandler,
        productPreview,
        categoryHandler,
        selectedCategory,
        resetFilters,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
