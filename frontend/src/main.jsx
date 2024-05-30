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
        path: "/cssproperties/box",
        element: <Boxprop />,
      },
      {
        path: "/cssproperties/list",
        element: <CssPropertiesList />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
