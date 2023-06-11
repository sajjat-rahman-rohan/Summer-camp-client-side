/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Dashboard from "../Layout/Dashboard";
import Instructors from "../pages/Instructor/Instructors";
import Classes from "../pages/Classes/Classes";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import StudentHome from "../pages/Dashboard/Student/StudentHome";
import MySelectedClasses from "../pages/Dashboard/Student/MySelectedClasses";
import MyEnrolledClasses from "../pages/Dashboard/Student/MyEnrolledClasses";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import Payments from "../pages/Dashboard/Student/Payments";
import InstructorHome from "../pages/Dashboard/Instructor/InstructorHome";
import AddAClass from "../pages/Dashboard/Instructor/AddAClass";
import InstructorClasses from "../pages/Dashboard/Instructor/InstructorClasses";
import Feedback from "../pages/Dashboard/Instructor/Feedback";
import AdminHome1 from "../pages/Dashboard/Admin/AdminHome1";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Update from "../pages/Dashboard/Update/Update";
import InstructorRoute from "./InstructorRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
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
      // Student routes
      {
        path: "studenthome",
        element: <StudentHome></StudentHome>,
      },
      {
        path: "myselectedclasses",
        element: <MySelectedClasses></MySelectedClasses>,
      },
      {
        path: "myenrolledclasses",
        element: <MyEnrolledClasses></MyEnrolledClasses>,
      },
      {
        path: "payment",
        element: <Payments></Payments>,
      },
      {
        path: "paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
      },

      // Instructor routes
      {
        path: "instructorhome",
        element: (
          <InstructorRoute>
            <InstructorHome></InstructorHome>
          </InstructorRoute>
        ),
      },
      {
        path: "addaclass",
        element: (
          <InstructorRoute>
            <AddAClass></AddAClass>
          </InstructorRoute>
        ),
      },
      {
        path: "instructorclasses",
        element: (
          <InstructorRoute>
            <InstructorClasses></InstructorClasses>
          </InstructorRoute>
        ),
      },
      // admin routes
      {
        path: "adminhome",
        element: (
          <AdminRoute>
            <AdminHome1></AdminHome1>
          </AdminRoute>
        ),
      },
      {
        path: "manageclasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },
      {
        path: "update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/classes/${params.id}`),
        // fetch(`http://localhost:5000/classes/${params.id}`),
        // http://localhost:5173/dashboard/update/6483b374e79e3a0860036872
      },
      {
        path: "feedback/:id",
        element: <Feedback></Feedback>,
        loader: ({ params }) =>
          // fetch(`http://localhost:5000/classes/${params.id}`),
          fetch(`http://localhost:5000/classes/feedback/${params.id}`),
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
