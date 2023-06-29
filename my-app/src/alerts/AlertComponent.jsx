import React from "react";
import { toast } from "react-toastify";

const AlertComponent = ({ message }) => {
  const notify = () => {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      toastClassName:
        "bg-green-500 text-white font-bold flex items-center p-4 rounded-md",
    });
  };

  return <button onClick={notify}>Show Toast</button>;
};

export default AlertComponent;
