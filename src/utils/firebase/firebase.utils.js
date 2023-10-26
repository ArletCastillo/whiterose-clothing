import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  getDoc, 
  setDoc, 
  collection,
  writeBatch 
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCwVDOWDX8FqKOIXqcWchgahHl4D4-W0Is",
    authDomain: "whiterose-clothing-db.firebaseapp.com",
    projectId: "whiterose-clothing-db",
    storageBucket: "whiterose-clothing-db.appspot.com",
    messagingSenderId: "710254227906",
    appId: "1:710254227906:web:ed3a65a9d82209bcbde65b"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  // it's a singleton class, that's why no 'new'
  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
  }

  export const createUserDocumentFromAuth = async (userauth) => {
    if (!userauth) return;

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

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }

  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  }

  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);