// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqvtlcjZIJ7fx8v2HPsmMPUSsLEOc_AWE",
  authDomain: "microproyecto2-e4653.firebaseapp.com",
  projectId: "microproyecto2-e4653",
  storageBucket: "microproyecto2-e4653.appspot.com",
  messagingSenderId: "45954698960",
  appId: "1:45954698960:web:26aef66571e13d891d98d5",
  measurementId: "G-HJCC4NCRHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // Conexion con el modulo de "auth" de Firebase
export const db = getFirestore(app); // Conexion con el modulo de "db" de Firebase
export const store = getStorage(app); // Conexion con el modulo de "store" de Firebase

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});