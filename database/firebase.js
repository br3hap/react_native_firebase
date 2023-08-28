// import firebase from 'firebase'

// import 'firebase/firestore'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDJYhGupUYJWxGfgLZRQdexY-p3Px5liT8",
    authDomain: "react-native-firebase-26201.firebaseapp.com",
    projectId: "react-native-firebase-26201",
    storageBucket: "react-native-firebase-26201.appspot.com",
    messagingSenderId: "734365124378",
    appId: "1:734365124378:web:fbd0ecdd3b284496118ea3",
    measurementId: "G-234XPE9N2Y"
  };
  
  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()


export default {
    firebase,
    db
}