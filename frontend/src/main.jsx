import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./Pages/Auth/Auth.jsx";
import Signup from "./Pages/Signup/Signup.jsx";
import Login from "./Pages/Login/Login.jsx";
import CssPropertiesList from "./Pages/Css Generator/CssPropertiesList.jsx";
import CssProperties from "./Pages/Css Generator/CssProperties.jsx";
import Textprop from "./Pages/Css Properties/Textprop.jsx";
import Boxprop from "./Pages/Css Properties/Boxprop.jsx";
import Filter from "./Pages/Css Properties/Filter.jsx";
import Transform from "./Pages/Css Properties/Transform.jsx";
import ListStyle from "./Pages/Css Properties/ListStyle.jsx";
import Cursor from "./Pages/Css Properties/Cursor.jsx";
import { UserProvider } from "./Context/UserContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: <Auth />,
    children: [
      {
        path: "/user/signup",
        element: <Signup />,
      },
      {
        path: "/user/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/cssproperties",
    element: <CssProperties />,
    children: [
      {
        path: "/cssproperties/text",
        element: <Textprop />,
      },
      {
        path: "/cssproperties/list",
        element: <CssPropertiesList />,
      },
      {
        path: "/cssproperties/box",
        element: <Boxprop />,
      },
      {
        path: "/cssproperties/filter",
        element: <Filter />,
      },
      {
        path: "/cssproperties/transform",
        element: <Transform />,
      },
      {
        path: "/cssproperties/liststyle",
        element: <ListStyle />,
      },
      {
        path: "/cssproperties/miscellaneous",
        element: <Cursor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>
);
