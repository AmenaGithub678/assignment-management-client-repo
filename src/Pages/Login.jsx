import React, { useContext } from 'react';
import SocialIcon from '../Componets/Shared/SocialIcon';
import Lottie from 'lottie-react';
import loginLottie from '../assets/lotties/Register.json';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router';

const Login = () => {

const {userSignIn,setUser} = useContext(AuthContext);

// location
  const location = useLocation()
  const navigate = useNavigate();
const handleSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

  // signIn  with -- firebase
  userSignIn(email,password)
  .then( result =>{
   setUser(result.user);
 
     Swal.fire({
          icon: 'success',
          title: 'Login Successfully!!',
          text: 'You have successfully logged in!',
          showConfirmButton: false,
          timer: 2000
        });
         navigate(location?.state ? location.state : "/")
  }
  )
  .catch((error)=>{
    // console.log(error);

    Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: error.message || 'Invalid credentials!',
      });
  })

    }
    return (
      <div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">

 <div className="text-center lg:text-left w-72 lg:w-96">
       <Lottie animationData={loginLottie} 
       loop={true}>
        </Lottie>           
</div>

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form 
        onSubmit={handleSignIn}
      
      className="card-body">
        <h1 className="mt-4 text-5xl font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email"
          name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"
          name="password"  className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form >
     <SocialIcon></SocialIcon>
    </div>
  </div>
  </div>
    );
};

export default Login;