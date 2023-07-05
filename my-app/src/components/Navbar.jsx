import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const authToken = Cookies.get("authToken");
  const handleLogout = () => {
    axios
      .post("http://localhost:8000/api/user/logout")
      .then(() => {
        Cookies.remove("authToken");
        navigate("/login");
      })
      .catch((error) => {
        console.log("Error al deslogearte:", error);
      });
  };
  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-lg font-semibold">
                <span className="text-indigo-500">{"<Code"}</span>
                Fashion<span className="text-indigo-500">{" />"}</span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Inicio
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Acerca de Nosotros{" "}
                </Link>
                <Link
                  to="/category/hombre"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Hombre
                </Link>
                <Link
                  to="/category/mujer"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Mujer
                </Link>
                {authToken && (
                  <Link
                    to="/orders"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Mis ordenes
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {authToken ? (
                <div className="flex items-center">
                  <Link
                    to="/cart"
                    className=" bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Carrito
                  </Link>
                  <button
                    onClick={handleLogout}
                    className=" bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium ml-2"
                  >
                    Cerrar sesion
                  </button>
                </div>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className=" bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className=" bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium ml-2"
                  >
                    Registrarse
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
