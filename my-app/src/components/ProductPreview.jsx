import React from "react";
import fakeDataProductor from "../utils/fakeDataProductor";
import { Link } from "react-router-dom";

const ProductPreview = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* arreglar la url del Link cuando se defina */}
      {fakeDataProductor.map(({ name, description, price, image, brand }) => {
        return (
          <Link to="/detalle-del-producto" key={name}>
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
        );
      })}
    </div>
  );
};

export default ProductPreview;
