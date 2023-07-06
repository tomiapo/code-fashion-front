import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const navigate = useNavigate();
  const authToken = Cookies.get("authToken");
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/user/logout");
      Cookies.remove("authToken");
      navigate("/login");
      return;
    } catch (error) {
      return { msg: "Error al desloguearse", error };
    }
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
                  Acerca de Nosotros
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
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {authToken ? (
                <div className="relative inline-block text-left">
                  <div>
                    <div>
                      <button
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                        type="button"
                        className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium focus:outline-none"
                        id="user-menu"
                        aria-haspopup="true"
                        aria-expanded="true"
                      >
                        usuario
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 2C5.03 2 1 6.03 1 11C1 14.68 3.53 17.77 7 19V12H5V11C5 7.13 7.13 5 11 5C14.87 5 17 7.13 17 11V12H15V19C18.47 17.77 21 14.68 21 11C21 6.03 16.97 2 12 2H10Z"
                        />
                      </button>
                    </div>
                    {userMenuOpen && (
                      <div
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu"
                      >
                        <Link
                          to="/orders"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Mis ordenes
                        </Link>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Perfil
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Cerrar sesión
                        </button>
                      </div>
                    )}
                  </div>

                  {userMenuOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu"
                    >
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Perfil
                      </Link>
                      <Link
                        to="/cart"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        role="menuitem"
                      >
                        Carrito
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Mis ordenes
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Cerrar sesión
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="text-gray-300 bg-indigo-600 hover:bg-indigo-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Iniciar sesión
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-300 bg-indigo-600  hover:bg-indigo-500  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
