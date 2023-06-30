import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ProductContext = createContext({ products: [] });

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    productPreview();
  }, []);

  const productPreview = () => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log("error al traer los productos:", error));
  };
  console.log(products);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
export default ProductProvider;
