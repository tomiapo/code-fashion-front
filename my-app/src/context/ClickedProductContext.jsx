import { createContext, useState } from "react";
import axios from "axios";

const ClickedProductContextDefaultValues = {};

export const ClickedProductContext = createContext(
  ClickedProductContextDefaultValues
);

const ClickedProductContextProvider = ({ children }) => {
  const [clickedProduct, setClickedProduct] = useState(
    ClickedProductContextDefaultValues
  );

  const clickedProductHandler = async (id) => {
    await axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((response) => response.data)
      .then((product) => {
        setClickedProduct(product);
      });
  };

  return (
    <ClickedProductContext.Provider
      value={{ clickedProduct, clickedProductHandler }}
    >
      {children}
    </ClickedProductContext.Provider>
  );
};

export default ClickedProductContextProvider;
