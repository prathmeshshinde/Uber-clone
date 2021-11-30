// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgNRFtulKo7VyqlRZ_Xc5t0oVo8mbcpPM",
  authDomain: "uber-next-clone-5fe05.firebaseapp.com",
  projectId: "uber-next-clone-5fe05",
  storageBucket: "uber-next-clone-5fe05.appspot.com",
  messagingSenderId: "1078454369582",
  appId: "1:1078454369582:web:a6305743cc053006194ebf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
