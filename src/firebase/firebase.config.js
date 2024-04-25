// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA081HUjblZyfTZXl9WmW1UYPgNAXlK2-8",
  authDomain: "sweet-residences.firebaseapp.com",
  projectId: "sweet-residences",
  storageBucket: "sweet-residences.appspot.com",
  messagingSenderId: "1024277281037",
  appId: "1:1024277281037:web:fe95f8d3f3463ca0bb1844"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;