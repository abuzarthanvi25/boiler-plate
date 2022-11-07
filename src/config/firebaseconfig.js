// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0ZBj9RDN_SZL9iJkw_l9_Ot3hzchk0nM",
  authDomain: "student-registration-sys-ef063.firebaseapp.com",
  projectId: "student-registration-sys-ef063",
  storageBucket: "student-registration-sys-ef063.appspot.com",
  messagingSenderId: "508123299863",
  appId: "1:508123299863:web:8ded49638c63573bf31c52",
  measurementId: "G-SLDYHB5245",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
