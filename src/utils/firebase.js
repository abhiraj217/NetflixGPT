// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQzgoZsRouFHJaWfv8kdL3xpZmZEQ_L-k",
  authDomain: "netflixgpt-b0a05.firebaseapp.com",
  projectId: "netflixgpt-b0a05",
  storageBucket: "netflixgpt-b0a05.firebasestorage.app",
  messagingSenderId: "242582606566",
  appId: "1:242582606566:web:370e29a47a00b4d839a127",
  measurementId: "G-1HFHGJSQGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);