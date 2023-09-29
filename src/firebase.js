import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCl0BhvdA5Ef5OdE18AR8as-npd6OQ9LsQ",
  authDomain: "clone-b3051.firebaseapp.com",
  projectId: "clone-b3051",
  storageBucket: "clone-b3051.appspot.com",
  messagingSenderId: "718765233242",
  appId: "1:718765233242:web:03f68f391059f0b2e93463",
  measurementId: "G-1KWHVKSJ2F"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
