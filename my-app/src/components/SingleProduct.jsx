import React from "react";

const SingleProduct = () => {
  return (
    <div className="single-product-card">
      <img
        src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1600" //placeholder image
        alt="product_image"
        style={{ width: "50%", height: "50%" }} // a modificar luego de agregar estilos
      />
      <p>Product name</p>
      <p>Product description</p>
      <p>Product price</p>
      <p>Product category</p>
      <button>Add to cart</button>
    </div>
  );
};

export default SingleProduct;
