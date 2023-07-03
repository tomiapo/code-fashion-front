import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../context/CartContext";
import { ClickedProductContext } from "../context/ClickedProductContext";
import { isLoggedIn } from "../utils/login.utils.js";
import {
  notifyToLoginWhenAddingToCart,
  notifyProductAlreadyInCart,
  notifyProductAddedToCart,
} from "../utils/notification.utils";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { clickedProduct, clickedProductHandler } = useContext(
    ClickedProductContext
  );
  const { cartItems, addToCart } = useContext(CartContext);

  useEffect(() => {
    clickedProductHandler(productId);
  }, []);

  const handleAddToCart = () => {
    const isInCart = cartItems.find((item) => item.id === clickedProduct.id);
    if (!isLoggedIn()) {
      notifyToLoginWhenAddingToCart();
      return;
    }

    if (isInCart) {
      notifyProductAlreadyInCart(clickedProduct.name);
      return;
    } else {
      addToCart(clickedProduct, quantity);
      notifyProductAddedToCart(clickedProduct.name);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mx-auto mt-8 max-w-md">
      <img
        src={clickedProduct.image}
        alt="product_image"
        className="w-3/4 mx-auto"
      />
      <p className="text-lg font-bold">{clickedProduct.name}</p>
      <p className="text-gray-700">{clickedProduct.description}</p>
      <p className="text-green-600 font-bold">${clickedProduct.price}</p>
      <p className="text-blue-500">Categoria: {clickedProduct.category_name}</p>
      <p className="text-gray-700">Marca: {clickedProduct.brand}</p>

      <br />
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default SingleProduct;
