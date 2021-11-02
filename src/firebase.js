import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// //import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDEVBq9tiL_R3hDY5qw3udfKo_BX3UeXWI",
    authDomain: "facebook-messenger-clone-b6821.firebaseapp.com",
    projectId: "facebook-messenger-clone-b6821",
    storageBucket: "facebook-messenger-clone-b6821.appspot.com",
    messagingSenderId: "294046543386",
    appId: "1:294046543386:web:ee1bb421de32b67e212ba3",
    measurementId: "G-TRGTHZ6BF1"
});

  const db = firebaseApp.firestore();
  export default db;