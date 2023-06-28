import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import RegisterContextProvider from "./store/RegisterContext";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/register"
          element={
            <RegisterContextProvider>
              <Register />
            </RegisterContextProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
