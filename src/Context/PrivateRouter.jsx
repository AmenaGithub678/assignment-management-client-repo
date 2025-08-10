import React, { use } from 'react';
 import { AuthContext } from './AuthContext';
 import { Navigate } from 'react-router';
import { RingLoader } from 'react-spinners';
const PrivateRouter = ({children}) => {
   const {user,loading} = use(AuthContext)

if(loading){
    return <RingLoader />
}

     if(!user){
         return <Navigate 
         to='/auth/login'></Navigate>
     }
     return children;
};

export default PrivateRouter;