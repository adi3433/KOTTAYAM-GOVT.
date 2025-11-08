// firebase.ts (or firebase.js)
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJWdvIz_QR_eKxZXO4OrufsEOV34KtTvU",
  authDomain: "kottayam-votes-2025.firebaseapp.com",
  projectId: "kottayam-votes-2025",
  storageBucket: "kottayam-votes-2025.firebasestorage.app",
  messagingSenderId: "690059290710",
  appId: "1:690059290710:web:2c4241aa7cbe30484eb3f7",
};

// Ensure Firebase initializes only once (important for Next.js hot reload)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
