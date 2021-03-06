import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxjbOeh17Prs7W7XI7fU_8lKRxjdtd8pU",
    authDomain: "here-61f73.firebaseapp.com",
    databaseURL: "https://here-61f73.firebaseio.com",
    projectId: "here-61f73",
    storageBucket: "here-61f73.appspot.com",
    messagingSenderId: "386958564353",
    appId: "1:386958564353:web:9d4fe676de973c5303f400",
    measurementId: "G-5QGT7J0J56"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { auth, db }