import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../context/CartContext";
import { ClickedProductContext } from "../context/ClickedProductContext";

const SingleProduct = () => {
  const { productId } = useParams();
  const { clickedProduct, clickedProductHandler } = useContext(
    ClickedProductContext
  );
  const { cartItems, addToCart } = useContext(CartContext);

  useEffect(() => {
    clickedProductHandler(productId);
  }, [clickedProductHandler, productId]);

  const handleAddToCart = () => {
    const isInCart = cartItems.find((item) => item.id === clickedProduct.id);

    if (isInCart) {
      toast.info(
        <div>
          <strong>{clickedProduct.name}</strong> is already in the cart!
        </div>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          toastClassName:
            "bg-blue-500 text-white font-bold flex items-center p-4 rounded-md",
        }
      );
    } else {
      addToCart(clickedProduct);
      notify();
    }
  };

  const notify = () => {
    toast.success(
      <div>
        <strong>{clickedProduct.name}</strong> has been added to your cart!
      </div>,
      {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastClassName:
          "bg-green-500 text-white font-bold flex items-center p-4 rounded-md",
      }
    );
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
      <p className="text-blue-500">Category: {clickedProduct.category_name}</p>
      <p className="text-gray-700">Brand: {clickedProduct.brand}</p>

      <br />
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
    </div>
  );
};

export default SingleProduct;
