// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import { GithubAuthProvider } from "firebase/auth";
const Auth = getAuth();
Auth.languageCode = 'it';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlrqHrkWjxfZNjyCoq8xDwLcXv1TmC7PE",
  authDomain: "msnfakestore.firebaseapp.com",
  projectId: "msnfakestore",
  storageBucket: "msnfakestore.firebasestorage.app",
  messagingSenderId: "743361476318",
  appId: "1:743361476318:web:1182e5c37d1f356c79344f",
  measurementId: "G-DG5RK16ELM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();