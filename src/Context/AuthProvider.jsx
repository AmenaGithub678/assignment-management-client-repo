import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword,
    onAuthStateChanged, signInWithEmailAndPassword,
    GoogleAuthProvider, 
signInWithPopup, 
signOut} from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
const [loading,setLoading]= useState(true);
const [user,setUser] = useState(null);
// Register
const createUser = (email,password) =>{
   setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password)
}

// Login
const userSignIn = (email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// Observer
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setLoading(false);
    setUser(currentUser);
    console.log('user in the auth changed', currentUser);
  });
  return () => {
    unsubscribe();
  };
}, []);

// Google
const signInWithGoogle 
= () =>{
  return signInWithPopup(auth,googleProvider);
} 
// logout 
const logOut = () =>{
   return signOut(auth);
} 

    const authInfo = {
      loading,
      setLoading,
      user,
      setUser,
      createUser,
      userSignIn,
      signInWithGoogle,
      logOut,

    }
    return (
       <AuthContext.Provider
         value ={authInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;