 import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5p57gh0Skzuo5wMn7DjYdFRE45nvgfnc",
    authDomain: "authentication-fee68.firebaseapp.com",
    projectId: "authentication-fee68",
    storageBucket: "authentication-fee68.appspot.com",
    messagingSenderId: "883689020068",
    appId: "1:883689020068:web:8af7241808d4a7b665e431",
    measurementId: "G-N5S9ET910Z"
  };

  const app = firebase.initializeApp(firebaseConfig);
//   const db = app.firestore();
  const auth = firebase.auth();


  export default auth;
  