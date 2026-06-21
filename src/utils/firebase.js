import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAQzgoZsRouFHJaWfv8kdL3xpZmZEQ_L-k",
  authDomain: "netflixgpt-b0a05.firebaseapp.com",
  projectId: "netflixgpt-b0a05",
  storageBucket: "netflixgpt-b0a05.firebasestorage.app",
  messagingSenderId: "242582606566",
  appId: "1:242582606566:web:370e29a47a00b4d839a127",
  measurementId: "G-1HFHGJSQGN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);