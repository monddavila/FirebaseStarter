// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword } from "firebase/auth";
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
console.log(app);

const googleSignInBtn = document.querySelector('.google-sign-in');
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

//Google Sign-In authentication
googleSignInBtn.addEventListener('click', () => {
  //console.log('Button clicked!');
  signInWithPopup(auth, provider).then((result) => {
    const user = result.user;
    alert(`Hello ${user.displayName}! You signed in with Google Oauth.`);


  }).catch((error) => {
    const errorMessage = error.message;
    alert(`Error: ${errorMessage}`);
  });

});

const epSignInBtn = document.querySelector('.ep-sign-in');
epSignInBtn.addEventListener('click', () => {
  //const email = document.querySelector('.email').value;
  //const password = document.querySelector('.password').value;

  const email = "test@email.com";
  const password = "12345678";

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert(`Hello ${user.email}! You signed in with email and password.`);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`);
    });
});

//Sign-Out
const signOutBtn = document.querySelector('.sign-out');
signOutBtn.addEventListener('click', () => {
  signOut(auth)
  .then(() => {
    alert('Signed out successfully!');
  })
  .catch((error) => {
    console.error('Sign out failed:', error.message);
  });
});



onAuthStateChanged(auth, (user) => {
  if (user) {
    alert("User is signed in"); // Update UI accordingly
  } else {
    alert("User is signed out"); // Update UI accordingly
  }
});