import { createBrowserRouter } from "react-router-dom";
import Root from "../../Root";
import Home from "../../page/Home";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import ProductDetails from "../../page/ProductDetails";
import CartsData from "../../page/CartsData";
import Privete from "../Auth/Privete";

export const routers = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children: [
        {
          path: '/',
          element: <Privete><Home/></Privete>
        },
        {
          path: '/details/:id',
          element: <Privete><ProductDetails/></Privete>
        },
        {
          path: '/cart',
          element: <Privete><CartsData/></Privete>
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