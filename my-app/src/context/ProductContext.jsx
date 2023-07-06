import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext({ products: [] });

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productPreview();
  }, []);

  const productPreview = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/products");
      setProducts(response.data);
    } catch (error) {
      return { msg: "Error retrieving products", error };
    }
  };

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
