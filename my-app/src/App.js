import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductPreview from "./components/ProductPreview";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RegisterContextProvider from "./context/RegisterContext";
import LoginContextProvider from "./context/LoginContext";

function App() {
  return (
    <div className="App">
      <Navbar />
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
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
