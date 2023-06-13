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
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import InstructorHome from "../pages/Dashboard/InstructorHome/InstructorHome";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import SendFeedback from "../pages/Dashboard/SendFeedback/SendFeedback";


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
          {
            path: 'manageclasses',
            element: <ManageClasses></ManageClasses>
          },
          {
            path: 'sendfeedback/:id',
            element: <SendFeedback></SendFeedback>,
            loader: ({params}) => fetch(`http://127.0.0.1:5000/classfeedback/${params.id}`)
          },


          // instructor routes
          {
            path: 'instructorhome',
            element: <InstructorHome></InstructorHome>
          },
          {
            path: 'addclass',
            element: <AddClass></AddClass>
          },
          {
            path: 'myclasses',
            element: <MyClasses></MyClasses>
          }
          
      
        ]
      }
])
export default router;