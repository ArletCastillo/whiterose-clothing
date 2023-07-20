import { intializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCwVDOWDX8FqKOIXqcWchgahHl4D4-W0Is",
    authDomain: "whiterose-clothing-db.firebaseapp.com",
    projectId: "whiterose-clothing-db",
    storageBucket: "whiterose-clothing-db.appspot.com",
    messagingSenderId: "710254227906",
    appId: "1:710254227906:web:ed3a65a9d82209bcbde65b"
  };
  
  const firebaseApp = intializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  // it's a singleton class, that's why no 'new'
  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);