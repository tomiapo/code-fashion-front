import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import "react-toastify/dist/ReactToastify.css";
import AddToCartButton from "./AddToCartButton";
import SearchBar from "./SearchBar";

const ProductPreview = () => {
  const { addToCart } = useContext(CartContext);
  const { products, searchBarParam, productPreview } =
    useContext(ProductContext);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  useEffect(() => {
    productPreview();
  }, [searchBarParam]);

  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div className="grid grid-cols-3 gap-4 relative shadow-lg py-4">
        {products.length === 0 ? (
          <p>No items to show</p>
        ) : (
          products.map(({ id, name, description, price, image, brand }) => (
            <div
              key={name}
              className="bg-white rounded-md relative shadow-md p-4 flex flex-col justify-between transition duration-300 ease-in-out transform hover:scale-105"
            >
              <Link to={`/product/${id}`}>
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
              </Link>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default ProductPreview;
