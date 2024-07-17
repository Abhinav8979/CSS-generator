import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartLen, setCartLen] = useState(0);

  const isItemInCart = (item) => {
    console.log(cartItems);
    if (cartItems.find((ele) => ele === item)) {
      return true;
    } else return false;
  };

  return (
    <UserContext.Provider
      value={{
        setCartItems,
        isItemInCart,
        setCartLen,
        cartLen,
        cartItems,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
