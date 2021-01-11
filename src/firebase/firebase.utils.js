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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
