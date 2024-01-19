// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/databases";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ1vXvYFKbRUYzxxJr3gtO6ObEKG75vyo",
  authDomain: "ebookstore2-a5a18.firebaseapp.com",
  databaseURL: "https://ebookstore2-a5a18-default-rtdb.firebaseio.com",
  projectId: "ebookstore2-a5a18",
  storageBucket: "ebookstore2-a5a18.appspot.com",
  messagingSenderId: "82577963930",
  appId: "1:82577963930:web:39795539db5cb0b12d9823",
  measurementId: "G-7FH2PP63YH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
const analytics = getAnalytics(app);
export default app;
