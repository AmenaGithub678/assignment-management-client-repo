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
import PrivateRouter from "../Context/PrivateRouter";
import UpdateAssignment from "../Pages/UpdateAssignment";
import ViewAssignment from "../Pages/ViewAssignment";
import Evalute from "../Componets/Evalute";
import About from "../Pages/About";
import Leaderboard from "../Pages/Leaderboard";
import Resources from "../Pages/Resources";



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
        element: <PrivateRouter>
         <CreateAssignment/>
       </PrivateRouter>,
    },
    {
        path: "/assignments",
       element: <Assignments/>
    },
    {
        path: "/about",
       element: <About></About>
    },
    {
        path: "/leaderboard",
       element: <Leaderboard></Leaderboard>
    },
{
        path: "/resourcesData",
       element: <Resources></Resources>
    },
    {
  path: "/assignments/:id",
  loader: ({ params }) => fetch(`https://my-assignmates-server-side.vercel.app/createAssignment/${params.id}`),
  Component: ViewAssignment,
},
    {
path: "/updateAssignment/:id",
loader: ({params}) =>fetch(`https://my-assignmates-server-side.vercel.app/createAssignment/${params.id}`),
Component:UpdateAssignment,
    },
    {
        path: "/pendingAssignment",
       element: <PrivateRouter>
         <PendingAssignment/>
         </PrivateRouter>
    },
    {
        path: "/Myattempt",
       element: <PrivateRouter><MyAttempted/></PrivateRouter>,
    },
    {
     path: "/evaluate/:id",
    element: 
          <PrivateRouter>
          <Evalute/>
          </PrivateRouter>
        ,
    }
   
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