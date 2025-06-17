import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';
const SocialIcon = () => {

const {signInWithGoogle} = useContext(AuthContext);
    
// location
  const location = useLocation();
  const navigate = useNavigate();
const handleGoogleSignIn = ()=>{
  signInWithGoogle()
        .then(result => {
      //  console.log(result.user)
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You have logged in with Google!',
            showConfirmButton: false,
            timer: 2000
             });
                         navigate(location?.state ? location.state : "/")
                })
                .catch(error => {
                    // console.log(error.message)
                     Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: error.message || 'Something went wrong with Google login!'
                        });

                })
        }

    return (
       <div className='m-4'>
     
       <div className='flex justify-center'>
       <button onClick={handleGoogleSignIn} 
       
       className='btn'>
           <FcGoogle />Google</button>
       </div>
       
       
               </div>
    );
};

export default SocialIcon;