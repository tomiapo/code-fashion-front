import { createContext, useState } from "react";
import axios from "axios";

const LoginContextDefaultValues = {
  username: "",
  password: "",
};

export const LoginContext = createContext(LoginContextDefaultValues);

const LoginContextProvider = ({ children }) => {
  const [userToLogin, setuserToLogin] = useState(LoginContextDefaultValues);
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
