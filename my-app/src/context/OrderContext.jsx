import axios from "axios";
import React, { useEffect, useState, createContext } from "react";
import { ProductContext } from "./ProductContext";

export const OrderContext = createContext({ orders: [] });

const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    orderPreview();
  }, []);
  const orderPreview = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/orderhistory/list"
      );
      setOrders(response.data);
      return;
    } catch (error) {
      return { msg: "Error retrieving orders", error };
    }
  };
  return (
    <ProductContext.Provider value={{ orders }}>
      {children}
    </ProductContext.Provider>
  );
};

export default OrderProvider;
