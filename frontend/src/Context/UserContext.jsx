import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = (props) => {
  const [userCart, setUserCart] = useState([]);
  const [isCart, setIsCart] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  return (
    <UserContext.Provider
      value={{
        userCart,
        setUserCart,
        isCart,
        setIsCart,
        userEmail,
        setUserEmail,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
