import { createBrowserRouter } from "react-router";

import Home from "../Componets/Home";
import Error from "../Pages/Error";
import MainLayout from "../Layouts/MainLayout";
import CreateAssignment from "../Pages/CreateAssignment";
import Assignments from "../Pages/Assignments";
import PendingAssignment from "../Pages/PendingAssignment";
import MyAttempted from "../Pages/MyAttempted";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <Error></Error>,
   children: [
    {
        path: "/",
       element: <Home/>
    },
    {
        path: "/createassignment",
       element: <CreateAssignment/>,
    },
    {
        path: "/assignments",
       element: <Assignments/>
    },
    {
        path: "/pendingAssignment",
       element: <PendingAssignment/>
    },
    {
        path: "/Myattempt",
       element: <MyAttempted/>
    },
   ],
  },
  {
     path: "/auth",
     element: <AuthLayout/>,
     children:[
          {
          path:"/auth/login",
          Component: Login,
        },
         {
          path:"/auth/register",
          Component: Register,
        },
     ]
  }
]);


export default router;