import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzLZ2wCdYMRHlInOd7wMwxIMDGvP3DdMk",
  authDomain: "lushystore-8b939.firebaseapp.com",
  projectId: "lushystore-8b939",
  storageBucket: "lushystore-8b939.firebasestorage.app",
  messagingSenderId: "883023865349",
  appId: "1:883023865349:web:31c9b8ba47b991043ade6c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
