import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs1bApZLJc5GBFxfEO673uvV5h8SpOqUw",
  authDomain: "animaflix-53e15.firebaseapp.com",
  projectId: "animaflix-53e15",
  storageBucket: "animaflix-53e15.appspot.com",
  messagingSenderId: "143798438113",
  appId: "1:143798438113:web:763555c2a6ae9f0fc50fa0",
  measurementId: "G-MT3VL4G2VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
  
export { auth, db, app };