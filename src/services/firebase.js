// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhFYTwau8kmjUpjO4hyPHG0hiYJCmL0bM",
    authDomain: "chatty-3252f.firebaseapp.com",
    projectId: "chatty-3252f",
    storageBucket: "chatty-3252f.appspot.com",
    messagingSenderId: "403353810326",
    appId: "1:403353810326:web:1ccf563c1d80542f0959b7"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth;
export const db = firebase.database();
