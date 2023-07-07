import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductPreview from "./components/ProductPreview";
import OrdersHistory from "./components/OrdersHistory";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RegisterContextProvider from "./context/RegisterContext";
import LoginContextProvider from "./context/LoginContext";
import ShoppingCart from "./components/Cart";
import SingleProduct from "./components/SingleProduct";
import ClickedProductContextProvider from "./context/ClickedProductContext";
import Checkout from "./components/Checkout";
import CheckoutConfirmed from "./components/CheckoutConfirmed";

import { CartProvider } from "./context/CartContext";
import ProductProvider from "./context/ProductContext";
import OrderProvider from "./context/OrderContext";
import Admin from "./components/Admin";

import Profile from "./components/Profile";

import SuperAdmin from "./components/SuperAdmin";

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
                  <div className="h-screen">
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
        <Route
          path="/checkout"
          element={
            <CartProvider>
              <div className="h-screen">
                <Checkout />
              </div>
            </CartProvider>
          }
        ></Route>
        <Route
          path="/checkout/confirmation"
          element={
            <div className="h-screen">
              <CheckoutConfirmed />
            </div>
          }
        ></Route>

        <Route
          path="/orders"
          element={
            <OrderProvider>
              <OrdersHistory />
            </OrderProvider>
          }
        />

        <Route path="/admin" element={<Admin />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/superadmin" element={<SuperAdmin />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
