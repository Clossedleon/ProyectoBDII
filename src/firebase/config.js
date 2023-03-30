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
  apiKey: "AIzaSyBKCBgt5-tTINBZbrBIPl4t-Wsu61Qnzs8",
  authDomain: "proyecto-bd-ii-cade2.firebaseapp.com",
  projectId: "proyecto-bd-ii-cade2",
  storageBucket: "proyecto-bd-ii-cade2.appspot.com",
  messagingSenderId: "231360181748",
  appId: "1:231360181748:web:47a8cc01c036d9df5735a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); // Conexion con el modulo de "auth" de Firebase
export const db = getFirestore(app); // Conexion con el modulo de "db" de Firebase
export const store = getStorage(app); // Conexion con el modulo de "store" de Firebase

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({prompt: 'select_account'});