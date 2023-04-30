// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDywAvykfMnsxgC7cXJ8EtRIzL66dZMxhE",
  authDomain: "bird-44b2f.firebaseapp.com",
  databaseURL: "https://bird-44b2f-default-rtdb.firebaseio.com",
  projectId: "bird-44b2f",
  storageBucket: "bird-44b2f.appspot.com",
  messagingSenderId: "927540171957",
  appId: "1:927540171957:web:d184f4f809337160e8dafc",
  measurementId: "G-9W65FG66T1",
  // The value of `databaseURL` depends on the location of the database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
// Initialize Cloud Firestore and get a reference to the service
const bd = getFirestore(app);
const storage = getStorage(app);
export { bd,storage };