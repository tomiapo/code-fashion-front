import React, { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductPreview from "./components/ProductPreview";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RegisterContextProvider from "./context/RegisterContext";
import LoginContextProvider from "./context/LoginContext";
import ShoppingCart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <StrictMode>
        <CartProvider>
          <ToastContainer />
          <Routes>
            <Route
              path="/register"
              element={
                <RegisterContextProvider>
                  <Register />
                </RegisterContextProvider>
              }
            />
            <Route
              path="/login"
              element={
                <LoginContextProvider>
                  <Login />
                </LoginContextProvider>
              }
            />
            <Route path="/" element={<ProductPreview />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </CartProvider>
      </StrictMode>
      <Footer />
    </div>
  );
}

export default App;
