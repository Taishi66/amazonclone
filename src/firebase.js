import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyBnNxacZHn49cnBdzf3RNfmfrG14l8MOVQ",
    authDomain: "amazclone-4d5e8.firebaseapp.com",
    projectId: "amazclone-4d5e8",
    storageBucket: "amazclone-4d5e8.appspot.com",
    messagingSenderId: "128787596346",
    appId: "1:128787596346:web:cd7d5d1b7c9499a8a3e103",
    measurementId: "G-G4G748Z6NP"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const signIn = signInWithEmailAndPassword();
const createUser = createUserWithEmailAndPassword();

export { db, auth, signIn, createUser }; 