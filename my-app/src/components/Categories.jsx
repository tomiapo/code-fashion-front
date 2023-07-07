import React, { useContext, useEffect, useState } from "react";
import { getAllCategories } from "../utils/categories.utils";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

const Categories = () => {
  const [allCategories, setCategories] = useState([]);
  const { categoryHandler } = useContext(ProductContext);

  useEffect(async () => {
    setCategories(await getAllCategories());
  }, []);

  return (
    <select
      name="categoryList"
      className="text-white  bg-indigo-500 border-solid border-indigo-600 border-1 hover:text-white rounded-md text-sm my-1"
      onChange={categoryHandler}
    >
      <option value="all">Categorias</option> 
      {allCategories?.map((category) => {
        return <option value={category}>{category}</option>;
      })}
    </select>
  );
};

export default Categories;
