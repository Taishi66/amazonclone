import firebase from 'firebase/compat/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDbGIpgo7CBDq4SBmLOONIdNADo72fBrTc",
    authDomain: "clone-47777.firebaseapp.com",
    projectId: "clone-47777",
    storageBucket: "clone-47777.appspot.com",
    messagingSenderId: "897059179330",
    appId: "1:897059179330:web:d711accf7830b9d494d6db",
    measurementId: "G-1TR05W3JW0"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);


export default firebaseAuth 