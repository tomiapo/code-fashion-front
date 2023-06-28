import { createContext, useState } from "react";
import axios from "axios";

const RegisterContextDefaultValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  address: "",
};

export const RegisterContext = createContext(RegisterContextDefaultValues);

const RegisterContextProvider = ({ children }) => {
  const [userToRegister, setUserToRegister] = useState(
    RegisterContextDefaultValues
  );
  const setRegisterInput = (e) => {
    setUserToRegister({ ...userToRegister, [e.target.name]: e.target.value });
  };

  const registerUserInDatabase = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/user/create-user", { ...userToRegister })
      .then(() => {
        alert("User created successfully");
        setUserToRegister(RegisterContextDefaultValues);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <RegisterContext.Provider
      value={{ userToRegister, setRegisterInput, registerUserInDatabase }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

export default RegisterContextProvider;
