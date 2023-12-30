import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../../page/Home";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import ProductDetails from "../../page/ProductDetails";

export const routers = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/details/:id',
          element: <ProductDetails/>
        },
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/singup',
          element: <SignUp/>
        },
        {
          path: '/login',
          element: <Login/>
        },
      ]
    }
  ])