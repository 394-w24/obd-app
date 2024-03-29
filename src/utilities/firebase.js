// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useEffect, useState} from 'react';
import { getDatabase, onValue, ref, connectDatabaseEmulator} from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, signInWithRedirect, connectAuthEmulator, signInWithCredential } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {

// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// if (!globalThis.EMULATION && import.meta.env.MODE === 'development') {
//   connectAuthEmulator(auth, "http://127.0.0.1:9099");
//   connectDatabaseEmulator(database, "127.0.0.1", 9000);

//   signInWithCredential(auth, GoogleAuthProvider.credential(
//     '{"sub": "qEvli4msW0eDz5mSVO6j3W7i8w1k", "email": "connieluksc@gmail.com", "displayName":"Connie", "email_verified": true}'
//   ));
  
//   // set flag to avoid connecting twice, e.g., because of an editor hot-reload
//   globalThis.EMULATION = true;
// }

export const signInWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider().setCustomParameters({
    prompt: 'select_account',
  }));
};

const firebaseSignOut = () => signOut(getAuth(app));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState(null);

  useEffect(() => (
      onAuthStateChanged(getAuth(app), setUser)
  ), []);

  return [user];
};

export const isUser = () => {
  const user = firebase.auth().currentUser 
  return user ? true : false
}

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};


