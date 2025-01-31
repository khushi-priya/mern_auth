// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-208bc.firebaseapp.com",
  projectId: "mern-auth-208bc",
  storageBucket: "mern-auth-208bc.firebasestorage.app",
  messagingSenderId: "1016844174762",
  appId: "1:1016844174762:web:cd50dfefed4699495817d3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);