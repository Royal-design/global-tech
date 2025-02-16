// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getFunctions, httpsCallable } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "global-tech-df1dd.firebaseapp.com",
  projectId: "global-tech-df1dd",
  storageBucket: "global-tech-df1dd.firebasestorage.app",
  messagingSenderId: "572308010784",
  appId: "1:572308010784:web:e1551521f4f7d5bcec0945",
  measurementId: "G-QE3S0ZXREV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
const functions = getFunctions(app);

export { functions, httpsCallable };
