import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { UserContext } from "../Context/UserContext";
import axios from "axios";

const ProtectedRoute = () => {
  // const [user, SetUser] = useState();

  const userContext = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      getFavCart();
    }
  }, [userContext.cartLen]);

  const getFavCart = async () => {
    const res = await axios.post("http://localhost:8000/api/user/getcart", {
      data: {
        email: localStorage.getItem("user"),
      },
    });
    if (res.data.cartArray) {
      userContext.setCartItems(res.data.message);
    }
  };

  return (
    <>
      <Outlet />
    </>
  );
};

export default ProtectedRoute;
