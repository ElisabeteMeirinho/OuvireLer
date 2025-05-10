import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDKRn1M5HvCRo9dtCWFP3adepUEe7lBbvg",
  authDomain: "ouvir-e-ler.firebaseapp.com",
  projectId: "ouvir-e-ler",
  storageBucket: "ouvir-e-ler.appspot.com",
  messagingSenderId: "1032722618943",
  appId: "1:1032722618943:web:21d05ad36b46290ca6b68a",
  measurementId: "G-V167H5ZQLV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider, onAuthStateChanged, signInWithPopup, collection, addDoc, getDocs };