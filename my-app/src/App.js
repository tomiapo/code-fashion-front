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
import SingleProduct from "./components/SingleProduct";
import ClickedProductContextProvider from "./context/ClickedProductContext";

import { CartProvider } from "./context/CartContext";
import ProductProvider from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <Navbar />

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
        <Route
          path="/"
          element={
            <CartProvider>
              <ClickedProductContextProvider>
                <ProductProvider>
                  <div>
                    <ProductPreview />
                  </div>
                </ProductProvider>
              </ClickedProductContextProvider>
            </CartProvider>
          }
        />

        <Route
          path="/product/:productId"
          element={
            <CartProvider>
              <ClickedProductContextProvider>
                <SingleProduct />
              </ClickedProductContextProvider>
            </CartProvider>
          }
        />
        <Route
          path="/cart"
          element={
            <CartProvider>
              <div className="h-screen">
                <ShoppingCart />
              </div>
            </CartProvider>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
