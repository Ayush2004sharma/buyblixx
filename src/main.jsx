import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LoginPage from "./page/LoginPage.jsx";
import SignupPage from "./page/SignupPage.jsx";
import Cart from "./Components/Cart.jsx";
import WishList from "./Components/WishList.jsx";
import ProductList from "./Components/ProductList.jsx";
import Navbar from "./Components/Navbar.jsx"; 

const router = createBrowserRouter([
  {
    path: "/buyblixx",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: (
      <>
        <Navbar />
        <App />
      </>
    ),
    children: [
      { path: "product", element: <ProductList /> },
      { path: "wishlist", element: <WishList /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  {
    path: "/loginpage", 
    element: <LoginPage />,
  },
  {
    path: "/signuppage",  
    element: <SignupPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
