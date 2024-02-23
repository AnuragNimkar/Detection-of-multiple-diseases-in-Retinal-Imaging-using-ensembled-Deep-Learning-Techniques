// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from  "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbbnYvY2P7fi5tiLQiGUNwQgmhXt14C0w",
  authDomain: "react-app-c8f8f.firebaseapp.com",
  projectId: "react-app-c8f8f",
  storageBucket: "react-app-c8f8f.appspot.com",
  messagingSenderId: "123839750377",
  appId: "1:123839750377:web:1d4028fcac4c51b3cc5078",
  measurementId: "G-MHJXYQ4YLR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export {app, auth};