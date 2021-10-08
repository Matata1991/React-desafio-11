import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBmhWZQaWfI8l81IxE-xpiwtk8taU2Lolc", 
    authDomain: "proyecto-coderhouse-617e4.firebaseapp.com", 
    projectId: "proyecto-coderhouse-617e4", 
    storageBucket: "proyecto-coderhouse-617e4.appspot.com",
    messagingSenderId: "279429719650", 
    appId: "1:279429719650:web:2eeb4c6efd329fe13e533b" 
  };


const app = firebase.initializeApp(firebaseConfig)


export function getFirestore(){
    return firebase.firestore(app)
}
