import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginContextDefaultValues = {
  email: "",
  password: "",
};

export const LoginContext = createContext(LoginContextDefaultValues);

const LoginContextProvider = ({ children }) => {
  const [userToLogin, setuserToLogin] = useState(LoginContextDefaultValues);
  const navigate = useNavigate();
  const setLoginInput = (e) => {
    setuserToLogin({ ...userToLogin, [e.target.name]: e.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8000/api/user/login",
        { ...userToLogin },
        { withCredentials: true }
      )
      .then(() => {
        setuserToLogin(LoginContextDefaultValues);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <LoginContext.Provider value={{ userToLogin, setLoginInput, loginUser }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
