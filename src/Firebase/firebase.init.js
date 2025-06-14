// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChgeqZ0yf4nvz0XeKSUZ9QVbmgataJvJ8",
  authDomain: "my-online-assignment-project.firebaseapp.com",
  projectId: "my-online-assignment-project",
  storageBucket: "my-online-assignment-project.firebasestorage.app",
  messagingSenderId: "431372011966",
  appId: "1:431372011966:web:1d0c81ef0262e79636d1ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);