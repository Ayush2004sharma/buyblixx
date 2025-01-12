import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import LoginPage from "../page/LoginPage.jsx";
import SignupPage from "../page/SignupPage.jsx";
import Cart from "../Components/Cart.jsx";
import WishList from "../Components/WishList.jsx";
import ProductList from "../Components/ProductList.jsx";
import Navbar from "../Components/Navbar.jsx";

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
      {
        path: "product",
        element: <ProductList />, // Product List will be its own route
      },
      {
        path: "wishlist",
        element: <WishList />, // Wish List will be its own route
      },
      {
        path: "cart",
        element: <Cart />,
      },
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

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
