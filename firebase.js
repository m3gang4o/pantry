// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0T_k6J41hIQmNamLLe6559HEkZlFWn58",
  authDomain: "hspantryapp-2ef8b.firebaseapp.com",
  projectId: "hspantryapp-2ef8b",
  storageBucket: "hspantryapp-2ef8b.appspot.com",
  messagingSenderId: "25092614305",
  appId: "1:25092614305:web:3265b011316e39a5eee8e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
