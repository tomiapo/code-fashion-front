import axios from "axios";
import React, { useEffect, useState, createContext } from "react";
import { ProductContext } from "./ProductContext";

export const OrderContext = createContext({ orders: [] });

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderPreview();
  }, []);
  const orderPreview = () => {
    axios
      .get("http://localhost:8000/api/orderhistory/list")
      .then((res) => setOrders(res.data))
      .catch((error) => console.log(error));
  };
  return (
    <ProductContext.Provider value={{ orders }}>
      {children}
    </ProductContext.Provider>
  );
};

export default OrderProvider;
