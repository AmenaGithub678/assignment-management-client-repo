import React, { useContext } from 'react';

import Lottie from 'lottie-react';

import registerLottie from '../assets/lotties/login.json';
import SocialIcon from '../Componets/Shared/SocialIcon';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const Register = () => {

const { createUser,setUser} = useContext(AuthContext);

 const handleRegister = e => {
  e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if(password.length<6){
           Swal.fire({
          icon: 'error',
          title: 'Weak Password',
          text: 'Password must be at least 6 characters long.',
        });
        return;
          
      }
      if( !/[a-z]/.test(password)){
        Swal.fire({
          icon: 'error',
          title: 'Password Issue',
          text: 'Password must contain at least one lowercase letter.',
        });
        return;
    }
    if( !/[A-Z]/.test(password)){
       Swal.fire({
          icon: 'error',
          title: 'Password Issue',
          text: 'Password must contain at least one uppercase letter.',
        });
        return;
    }

  // create user with -- firebase
  createUser(email,password)
  .then( result =>{
    // console.log(result.user);
    const user = result.user;
    setUser(user);

     Swal.fire({
          icon: 'success',
          title: 'Registration Successful',
          text: 'Your account has been created successfully!',
          showConfirmButton: false,
          timer: 2000
        });
  }
  )
  .catch((error)=>{
    console.log(error);
  })

    }


    return (
<div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* Lottie Animation */}
        <div className="text-center lg:text-left w-72 lg:w-96">
          <Lottie animationData={registerLottie} loop={true} />
        </div>

        {/* Register Form */}
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-3xl lg:text-5xl font-bold">Register now!</h1>

          <form onSubmit={handleRegister} className="card-body">
            <fieldset className="fieldset space-y-2">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Your name" required />

              <label className="label">Photo URL</label>
              <input type="text" name="photo" className="input" placeholder="Photo URL" required />

              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />

              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required />

              <button type="submit" className="btn btn-neutral mt-4">Register</button>

              <p className="text-center pt-3 font-semibold">
                Already have an account?{' '}
                <Link to="/auth/login" className="text-blue-500 underline">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>

          <div className="px-6 pb-6">
            <div className="divider">OR</div>
            <SocialIcon />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;