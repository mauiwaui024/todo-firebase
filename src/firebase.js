// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb4yqcHWhZTT-8XZaFdYh52qI__EA_A7M",
  authDomain: "todo-app-bf73c.firebaseapp.com",
  projectId: "todo-app-bf73c",
  storageBucket: "todo-app-bf73c.appspot.com",
  messagingSenderId: "855101553133",
  appId: "1:855101553133:web:e9013f70551c1d4c410fe4"
};
// Initialize Cloud Firestore and get a reference to the service

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)