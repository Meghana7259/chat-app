// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5bsLmXY2TXRry2mQlPkGN0R0iPOSRn-8",
  authDomain: "chat-app-2baec.firebaseapp.com",
  projectId: "chat-app-2baec",
  storageBucket: "chat-app-2baec.appspot.com",
  messagingSenderId: "736971308453",
  appId: "1:736971308453:web:76ea29c686ccab74ccfc4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)