import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ClickedProductContext } from "../context/ClickedProductContext";

const SingleProduct = () => {
  const { productId } = useParams();
  const { clickedProduct, clickedProductHandler } = useContext(
    ClickedProductContext
  );

  useEffect(() => {
    clickedProductHandler(productId);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mx-auto mt-8 max-w-md">
      <img
        src={clickedProduct.image}
        alt="product_image"
        className="w-full h-auto"
      />
      <p className="text-lg font-bold">{clickedProduct.name}</p>
      <p className="text-gray-700">{clickedProduct.description}</p>
      <p className="text-green-600 font-bold">${clickedProduct.price}</p>
      <p className="text-blue-500">{clickedProduct.category_name}</p>
      <p className="text-gray-700">Marca: {clickedProduct.brand}</p>
      <div className="flex items-center">
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">
          -
        </button>
        <span className="mx-2">4</span>
        <button className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg">
          +
        </button>
      </div>
      <br />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add to cart
      </button>
    </div>
  );
};

export default SingleProduct;
