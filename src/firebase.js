import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBUIYQ9IDYdvPfoDmUDTDGfmwvPIWKPOow",
    authDomain: "mail-clone-india.firebaseapp.com",
    projectId: "mail-clone-india",
    storageBucket: "mail-clone-india.appspot.com",
    messagingSenderId: "15891033514",
    appId: "1:15891033514:web:3a13f380a692a7e99d4fd3",
    measurementId: "G-B6CP8WT9PP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()

export {db, auth, provider}