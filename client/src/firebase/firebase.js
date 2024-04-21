// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ateam-77359.firebaseapp.com",
  projectId: "ateam-77359",
  storageBucket: "ateam-77359.appspot.com",
  messagingSenderId: "1053390640956",
  appId: "1:1053390640956:web:6b3dcd552e78401fae7039"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

