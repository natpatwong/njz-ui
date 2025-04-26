// firebase.js
"use client";

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';  // import แค่ครั้งเดียวพอ
import { getFirestore } from 'firebase/firestore';  // firestore import ปกติ
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCkXyFbIO1PDGeGMttX16hVJQeyrNNuGbA",
  authDomain: "njfansite-ac618.firebaseapp.com",
  projectId: "njfansite-ac618",
  storageBucket: "njfansite-ac618.firebasestorage.app",
  messagingSenderId: "944045052538",
  appId: "1:944045052538:web:0f1a5b6d7b6f235ef9a1c3",
  measurementId: "G-KXF7TVQ067"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
