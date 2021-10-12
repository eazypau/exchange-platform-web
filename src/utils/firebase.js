import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/firebase-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCC7Yie3RZhusyEDS1U4Erp_pD3JTFBU1g",
  authDomain: "exchange-platform-92854.firebaseapp.com",
  projectId: "exchange-platform-92854",
  storageBucket: "exchange-platform-92854.appspot.com",
  messagingSenderId: "32159966574",
  appId: "1:32159966574:web:c85a16e2071999b7f00d7f",
  measurementId: "G-8LCWP241BR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore(); //initate firestore connection

export const profileCollection = db.collection("userProfile");

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storageRef = firebase.storage().ref(); // Points to root reference
