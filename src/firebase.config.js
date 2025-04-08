import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCx3Do_IoixoWAdjF3ibJRuQuD7RlaanaQ",
  authDomain: "multimart-f7cf8.firebaseapp.com",
  projectId: "multimart-f7cf8",
  storageBucket: "multimart-f7cf8.appspot.com",
  messagingSenderId: "363816252220",
  appId: "1:363816252220:web:cee914b6fd5a7d8c1ca439",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
