  
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore';

// Your Web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAG3GUwgc5ExCCI7LgnJ-07iYp1iSGnmZs",
    authDomain: "fir-authtest-a6924.firebaseapp.com",
    databaseURL: "https://fir-authtest-a6924.firebaseio.com",
    projectId: "fir-authtest-a6924",
    /*storageBucket: "fir-authtest-a6924.appspot.com",
    messagingSenderId: "411960892184",
    appId: "1:411960892184:web:5ae980729e643b8f519c6d"*/
  };

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const google_provider = new firebase.auth.GoogleAuthProvider();
export const facebook_provider = new firebase.auth.FacebookAuthProvider();

