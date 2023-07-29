import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwVDOWDX8FqKOIXqcWchgahHl4D4-W0Is",
    authDomain: "whiterose-clothing-db.firebaseapp.com",
    projectId: "whiterose-clothing-db",
    storageBucket: "whiterose-clothing-db.appspot.com",
    messagingSenderId: "710254227906",
    appId: "1:710254227906:web:ed3a65a9d82209bcbde65b"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  // it's a singleton class, that's why no 'new'
  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userauth) => {
    const userDocRef = doc(db, 'users', userauth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      const { displayName, email } = userauth;
      const createdAt = new Date();
      try {
        await setDoc(userDocRef, {displayName, email, createdAt});
      } catch(error) {
        console.log(error);
      }
    }

    return userDocRef;
  }