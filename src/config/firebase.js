import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTdfgWw0XeAwaUWl7Dp1ZajR97Se65-BE",
  authDomain: "just-do-it-12cdc.firebaseapp.com",
  projectId: "just-do-it-12cdc",
  storageBucket: "just-do-it-12cdc.firebasestorage.app",
  messagingSenderId: "967411406587",
  appId: "1:967411406587:web:3edddd86458e03c617025e",
  measurementId: "G-W54QMWRSV1"
}; 

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)
const noteCollections = collection(db, "users")

export {auth , noteCollections, db}