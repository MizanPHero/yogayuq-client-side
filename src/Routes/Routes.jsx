import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../Layout/Main";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "registration",
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>, 
        children: [
        //   {
        //     path: 'userhome',
        //     element: <UserHome></UserHome>
        //   },
        //   {
        //     path: 'mycart', 
        //     element: <MyCart></MyCart>
        //   },
        //   {
        //     path:'payment',
        //     element: <Payment></Payment>
        //   },
          // admin routes
          {
            path: 'adminhome',
            element: <AdminHome></AdminHome>
          },
          {
            path: 'manageusers', 
            element: <ManageUsers></ManageUsers>
          },
        //   {
        //     path: 'addItem',
        //     element: <AdminRoute><AddItem></AddItem></AdminRoute>
        //   },
        //   {
        //     path: 'manageitems',
        //     element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
        //   }
        ]
      }
])
export default router;