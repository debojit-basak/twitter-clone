// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCpGtg2D8b6At8mUY3hZtmLPsvxTLQqneg",
    authDomain: "twitter-clone-ad6c8.firebaseapp.com",
    projectId: "twitter-clone-ad6c8",
    storageBucket: "twitter-clone-ad6c8.appspot.com",
    messagingSenderId: "16618023816",
    appId: "1:16618023816:web:c9bff434cfbabec077e83d",
    measurementId: "G-YLQ4MLZYP4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;