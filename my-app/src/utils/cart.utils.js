import axios from "axios";
import { getLoggedUser } from "./login.utils";

export const checkoutCart = (cartItems) => {
  const loggedUser = getLoggedUser();

  axios
    .post(
      "http://localhost:8000/api/orderhistory/create",
      { cartItems, loggedUser },
      {
        withCredentials: true,
      }
    )
    .then((result) => result.data)
    .then((cart) => console.log(cart));
};
