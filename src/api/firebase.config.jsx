// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZzWE3f64iX6tWgF6I-eTbZhEu3uwxWhY",
  authDomain: "ema-6af3b.firebaseapp.com",
  projectId: "ema-6af3b",
  storageBucket: "ema-6af3b.appspot.com",
  messagingSenderId: "391270545272",
  appId: "1:391270545272:web:68bacf51be03176693fa8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);