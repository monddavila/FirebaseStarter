// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzM2ILdMIpL2vGUSHF8MVWFQR9FY9_CZM",
  authDomain: "monddavila.firebaseapp.com",
  databaseURL: "https://monddavila.firebaseio.com",
  projectId: "monddavila",
  storageBucket: "monddavila.appspot.com",
  messagingSenderId: "1001676165360",
  appId: "1:1001676165360:web:dbd2caf91df550ff177235",
  measurementId: "G-0XN2MTLFWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)