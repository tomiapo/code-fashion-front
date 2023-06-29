import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import fakeDataProductor from "../utils/fakeDataProductor";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddToCartButton from "./AddToCartButton";

const ProductPreview = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {fakeDataProductor.map(({ name, description, price, image, brand }) => {
        const product = { name, description, price, image, brand };
        return (
          <div key={name} className="relative">
            <Link to="/detalle-del-producto">
              <div className="bg-white rounded-md shadow-md p-4 flex flex-col justify-between transition duration-300 ease-in-out transform hover:scale-105">
                <div>
                  <img
                    src={image}
                    alt={name}
                    className="object-contain h-32 w-full mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{name}</h3>
                  <p className="text-gray-500 mb-2">{description}</p>
                  <p className="text-gray-700 font-bold">${price}</p>
                  <p className="text-gray-500">{brand}</p>
                </div>
              </div>
            </Link>
            <AddToCartButton
              onClick={() => handleAddToCart(product)}
              productName={name}
            />
          </div>
        );
      })}
      <ToastContainer />
    </div>
  );
};

export default ProductPreview;
