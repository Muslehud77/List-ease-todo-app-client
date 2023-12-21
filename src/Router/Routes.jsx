import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import PrivateRouteForLoginRegister from "../PrivateRoute/LoginRegister/PrivateRouteForLoginRegister";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/login',
            element: <PrivateRouteForLoginRegister><Login/></PrivateRouteForLoginRegister>
        },
        {
            path: '/register',
            element: <PrivateRouteForLoginRegister><Register/></PrivateRouteForLoginRegister>
        },
    ]
  },
]);
