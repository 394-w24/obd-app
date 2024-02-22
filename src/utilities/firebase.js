// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState} from 'react';
import { getDatabase} from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoG98kstplxRfHSn9DuTlZAjJZqRGjGdU",
  authDomain: "obd-app-acded.firebaseapp.com",
  projectId: "obd-app-acded",
  storageBucket: "obd-app-acded.appspot.com",
  messagingSenderId: "433829993281",
  appId: "1:433829993281:web:19b06a3d30e27631285fc0",
  measurementId: "G-WSSTWZSKS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export const signInWithGoogle = () => {
  signInWithPopup(getAuth(app), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(app));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => (
      onAuthStateChanged(getAuth(app), setUser)
  ), []);

  return [user];
};

export default database;