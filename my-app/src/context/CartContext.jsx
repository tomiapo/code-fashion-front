import React, { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState([]);

  const [user, setUser] = useState(null); // User information

  useEffect(() => {
    // Retrieve cart items and quantities from local storage on component mount
    const storedCartItems = localStorage.getItem("cartItems");
    const storedQuantities = localStorage.getItem("quantities");
    if (storedCartItems && storedQuantities) {
      setCartItems(JSON.parse(storedCartItems));
      setQuantities(JSON.parse(storedQuantities));
    }
  }, []);

  useEffect(() => {
    // Store cart items and quantities in local storage whenever they change
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("quantities", JSON.stringify(quantities));
  }, [cartItems, quantities]);

  useEffect(() => {
    // Store cart items in local storage whenever it changes
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => [...prevItems, product]);
    setQuantities((prevQuantities) => [...prevQuantities, quantity]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });

    setQuantities((prevQuantities) => {
      const updatedQuantities = [...prevQuantities];
      updatedQuantities.splice(index, 1);
      return updatedQuantities;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setQuantities([]);
  };
  const setUserInformation = (userInfo) => {
    setUser(userInfo);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        user,
        setCartItems,
        setUserInformation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
