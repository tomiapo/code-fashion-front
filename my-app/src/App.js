import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductPreview from "./components/ProductPreview";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RegisterContextProvider from "./context/RegisterContext";

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
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProductPreview />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
