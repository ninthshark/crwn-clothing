import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAKd4R2lT-L8A7wWpR_iJ5SHcDq0PO7pAc",
  authDomain: "crwn-bd-1704d.firebaseapp.com",
  projectId: "crwn-bd-1704d",
  storageBucket: "crwn-bd-1704d.appspot.com",
  messagingSenderId: "731208820011",
  appId: "1:731208820011:web:af17f78bbafc179a45516e",
  measurementId: "G-KGB2DZSGEG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
