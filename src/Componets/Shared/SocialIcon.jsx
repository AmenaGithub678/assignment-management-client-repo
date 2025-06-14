import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Context/AuthContext';
const SocialIcon = () => {

    const {signInWithGoogle} = useContext(AuthContext);
    
        const handleGoogleSignIn = ()=>{
       signInWithGoogle()
        .then(result => {
                    console.log(result.user)
                })
                .catch(error => {
                    console.log(error.message)
                })
        }

    return (
       <div className='m-4'>
       <div className="divider">Login/Register with social accounts</div>
       <div className='flex justify-center'>
       <button onClick={handleGoogleSignIn} 
       
       className='btn'>
           <FcGoogle />Google</button>
       </div>
       
       
               </div>
    );
};

export default SocialIcon;