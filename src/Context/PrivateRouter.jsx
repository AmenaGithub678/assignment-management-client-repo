import React, { use } from 'react';
 import { AuthContext } from './AuthContext';
 import { Navigate } from 'react-router';
import LoadinSpinner from '../Componets/Shared/LoadinSpinner';
const PrivateRouter = ({children}) => {
   const {user,loading} = use(AuthContext)

if(loading){
    return <LoadinSpinner></LoadinSpinner>
}

     if(!user){
         return <Navigate 
         to='/auth/login'></Navigate>
     }
     return children;
};

export default PrivateRouter;