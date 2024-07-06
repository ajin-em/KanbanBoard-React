import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyA1O4UJfV66YCYyTj8i5v-F9UDXbe3rRdI",
  authDomain: "kanban-4pp.firebaseapp.com",
  projectId: "kanban-4pp",
  storageBucket: "kanban-4pp.appspot.com",
  messagingSenderId: "1061093799950",
  appId: "1:1061093799950:web:828c066d52e638ee33245f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9098");
  connectFirestoreEmulator(db, "localhost", 8082);
  connectFunctionsEmulator(fbFunctions, "localhost", 5002);
}