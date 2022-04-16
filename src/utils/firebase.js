// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnQyeHcovgHEoVWdKksBjsfD79oK-X1so",
  authDomain: "fire-contact-app-6bea1.firebaseapp.com",
  databaseURL: "https://fire-contact-app-6bea1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fire-contact-app-6bea1",
  storageBucket: "fire-contact-app-6bea1.appspot.com",
  messagingSenderId: "295691936570",
  appId: "1:295691936570:web:f3894d3a425fafbdc22603"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;

