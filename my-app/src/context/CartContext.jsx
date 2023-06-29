import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null); // User information

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => {
      const updatedCartItems = [...prevItems];
      updatedCartItems.splice(index, 1);
      return updatedCartItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
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
        setUserInformation,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
