import { createContext, useState } from "react";
import fakeDataProductor from "../utils/fakeDataProductor";

const ClickedProductContextDefaultValues = {
  name: "",
  price: null,
  description: "",
  image: "",
  stock: null,
  category_name: "",
  brand: "",
};

export const ClickedProductContext = createContext(
  ClickedProductContextDefaultValues
);

const ClickedProductContextProvider = ({ children }) => {
  const [clickedProduct, setClickedProduct] = useState(
    ClickedProductContextDefaultValues
  );

  const clickedProductHandler = (name) => {
    const selectedProduct = fakeDataProductor.filter(
      (product) => product.name === name
    )[0];

    setClickedProduct(selectedProduct);
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
