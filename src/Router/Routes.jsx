import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import PrivateRouteForLoginRegister from "../PrivateRoute/LoginRegister/PrivateRouteForLoginRegister";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddToDo from "../Pages/Dashboard/AddToDo";
import PrivateRouteForDashboard from "../PrivateRoute/PrivateRouteForDashboard/PrivateRouteForDashboard";
import ToDoList from './../Pages/Dashboard/ToDoList';

import Completed from './../Pages/Dashboard/Completed';
import EditTodo from "../Pages/Dashboard/EditTodo";
import Ongoing from "./../Pages/Dashboard/OnGoing";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: (
          <PrivateRouteForLoginRegister>
            <Login />
          </PrivateRouteForLoginRegister>
        ),
      },
      {
        path: "/register",
        element: (
          <PrivateRouteForLoginRegister>
            <Register />
          </PrivateRouteForLoginRegister>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRouteForDashboard>
            <Dashboard />
          </PrivateRouteForDashboard>
        ),
        children: [
          {
            path: "/dashboard",
            element: <AddToDo />,
          },
          {
            path: "/dashboard/todo-list",
            element: <ToDoList />,
          },
          {
            path: "/dashboard/on-going",
            element: <Ongoing />,
          },
          {
            path: "/dashboard/completed",
            element: <Completed />,
          },
          {
            path: "/dashboard/edit-task/:id",
            element: <EditTodo />,
          },
        ],
      },
    ],
  },
]);
