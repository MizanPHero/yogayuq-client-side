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
import InstructorAll from "../pages/InstructorAll/InstructorAll";
import StudentHome from "../pages/Dashboard/StudentHome/StudentHome";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";
import ClassAll from "../pages/Dashboard/ClassAll/ClassAll";
import Payment from "../pages/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "instructors",
        element: <InstructorAll></InstructorAll>,
      },
      {
        path: "classes",
        element: <ClassAll></ClassAll>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      //student routes
      {
        path: "studenthome",
        element: <PrivateRoute><StudentHome/></PrivateRoute>,
      },
      {
        path: "myselectedclass",
        element: <PrivateRoute><SelectedClass/></PrivateRoute>
      },
      {
        path: "enrolledclass",
        element: <PrivateRoute><EnrolledClass/></PrivateRoute>
      },
      {
        path: "payment",
        element: <Payment/>
      },
      // admin routes
      {
        path: "adminhome",
        element: <PrivateRoute><AdminHome/></PrivateRoute>,
      },
      {
        path: "manageusers",
        element: <PrivateRoute><ManageUsers/></PrivateRoute>,
      },
      {
        path: "manageclasses",
        element: <PrivateRoute><ManageClasses/></PrivateRoute>,
      },
      {
        path: "sendfeedback/:id",
        element: <PrivateRoute><SendFeedback/></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`http://127.0.0.1:5000/classfeedback/${params.id}`),
      },

      // instructor routes
      {
        path: "instructorhome",
        element: <PrivateRoute><InstructorHome/></PrivateRoute>,
      },
      {
        path: "addclass",
        element: <PrivateRoute><AddClass/></PrivateRoute>,
      },
      {
        path: "myclasses",
        element: <PrivateRoute><MyClasses/></PrivateRoute>,
      },
    ],
  },
]);
export default router;
