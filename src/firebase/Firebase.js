
import { initializeApp } from "firebase/app";

//Connecting firebase
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCFZ0rj-8L1lsaZUHjaZ8SowDeZ7ZD8iE8",
  authDomain: "filmyverse-39ae3.firebaseapp.com",
  projectId: "filmyverse-39ae3",
  storageBucket: "filmyverse-39ae3.appspot.com",
  messagingSenderId: "938188425678",
  appId: "1:938188425678:web:6b9bae13cf4d4aab49839f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Accessing database
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");


export default app; 