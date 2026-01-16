// firebase.ts (or firebase.js)
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyB7EHpcQXSdzFayr362Rt00JZJeldmM9Pw",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "kottayam-official.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "kottayam-official",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "kottayam-official.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "945679591316",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:945679591316:web:b6780228c9f01e7a16d181",
};

// Ensure Firebase initializes only once (important for Next.js hot reload)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);
const functions = getFunctions(app);

// Connect to emulators if running locally (must be done before any operations)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const useEmulators = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === 'true';
  
  if (useEmulators) {
    try {
      connectFirestoreEmulator(db, '127.0.0.1', 8081);
      connectStorageEmulator(storage, '127.0.0.1', 9199);
      connectFunctionsEmulator(functions, '127.0.0.1', 5001);
      console.log('🔥 Connected to Firebase Emulators');
    } catch (error) {
      console.log('Emulators already connected or not available');
    }
  }
}

export { db, storage, functions };
